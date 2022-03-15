import React,{Component} from 'react';
import { Card, Button,Form,Message, Icon, Container } from 'semantic-ui-react';
import scrt from '../../ethereum/scrt';
import web3 from '../../ethereum/web3'
import {Link, Router} from '../../routes';
import Layout from '../../components/Layout'

class SCRT extends Component{
    static async getInitialProps({query}) {
        const name = query.name
        const prn = query.prn
        const tokensCount = query.tokensCount
        const account = query.account
        const trnnum = query.trnnum
        const accounts = web3.eth.getAccounts();
        const latestBlock = await web3.eth.getBlock('latest');
        const blockGas = latestBlock.gasLimit;
        let result = await scrt.methods.sendTokens("0xee1da50aA7C2E781E5fC85368CAf4B2b4C5ccfcB", 20).estimateGas({from: accounts[0]});
        const finalGas = (blockGas * result);
        let resultineth = web3.utils.fromWei(web3.utils.toBN(finalGas), "ether")
        
        


        return {name, prn, tokensCount, account, trnnum, result, resultineth}
    }
    state = {
        
        loading: false,
        errorMessage: '',
        successMessage: '',
        hidden: true
    }

    onSubmit = async (event) => {
        event.preventDefault();

        

        this.setState({loading: true, errorMessage: ''});

        try{
            
            await scrt.methods.sendTokens(this.props.account, this.props.tokensCount).send({
                from: this.props.account
            })
            this.setState({hidden: false})
            this.setState({successMessage: "Your transaction is completed successfully, Redirecting back to profile in 10 seconds"}); 
            setTimeout(() => { Router.pushRoute(`http://localhost.smartcookie.in//main/rewards_log`) }, 10000);
            

        //
        } catch (err) {
            this.setState({errorMessage: err.message});
        }

        this.setState({loading: false});

    }
    

    render() {
        return(
                <Layout>
                    
                    <h1>Name: {this.props.name}</h1>
                    <h1>Student PRN: {this.props.prn}</h1>
                    <h1>Reward Coins: {this.props.tokensCount}</h1>
                    <h1>Account funds are transferred to: {this.props.account}</h1>
                    <h1>Transaction ID: {this.props.trnnum}</h1>
                    <h1>Gas: {this.props.resultineth}eth</h1>
            
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
    <Message
    error
    header='There was some error with your submission.'
    content = {this.state.errorMessage}
  />

  <Message
    hidden = {this.state.hidden}
    header={this.state.successMessage}
    
  />
    
    <Button loading={this.state.loading} primary type='submit'>Sign the Transaction</Button>
  </Form>
            </Layout>
            
            )
    }
}

export default SCRT;
