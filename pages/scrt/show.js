import React,{Component} from 'react';
import { Card, Button, Icon, Container, Form, Message } from 'semantic-ui-react';
import {Link} from '../../routes';
import Layout from '../../components/Layout'

class SCRT extends Component{
    static async getInitialProps({query}) {
        const name = query.name
        const prn = query.prn
        const tokensCount = query.tokensCount
        const account = query.account
        const trnnum = query.trnnum

        return {name, prn, tokensCount, account, trnnum}
    }

    state = {
        
        loading: false,
        errorMessage: ''
    }

    

    render() {
        return(
                <Layout>
                    
                    <h1>Name: {this.props.name}</h1>
                    <h1>Student PRN: {this.props.prn}</h1>
                    <h1>RewardCoins: {this.props.tokensCount}</h1>
                    <h1>Account funds are transferred to: {this.props.account}</h1>
                    <h1>Transaction ID: {this.props.trnnum}</h1>
                    
            <Link route={`/scrt/gasEstimate/${this.props.name}/${this.props.prn}/${this.props.tokensCount}/${this.props.account}/${this.props.trnnum}`}><a><Button primary>Get Gas Estimate</Button></a></Link>
            
            </Layout>
            
            )
    }
}

export default SCRT;