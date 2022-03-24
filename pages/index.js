import { useWeb3 } from "@3rdweb/hooks" 
import { Card, Button, Icon, Container, Form, Message } from 'semantic-ui-react';
import {Link} from '../routes';
import Layout from '../components/Layout'


export async function getServerSideProps({query}) {
  const name = query.name;
  const prn = query.prn;
  const tokensCount = query.tokensCount;
  const account = query.account;
  const trnnum = query.trnnum;
  return {
    props: {name, prn, tokensCount, account, trnnum}, // will be passed to the page component as props
  }
}


function Home(props) {

   

    const { connectWallet, address, error } = useWeb3();
    error ? console.log(error) : null;
  
return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-100">
    {address ? (
      <p className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300 font-mono font-medium cursor-pointer duration-100">
        {address}
      </p>
    ) : (
      <button
        className="px-4 py-2 rounded-md bg-purple-600 cursor-pointer hover:bg-purple-500 text-xl font-semibold duration-100 text-white"
        onClick={()=>connectWallet("injected")}
      >
        Connect Wallet
      </button>
      
    )}

    <Link route={`/scrt/show?name=${props.name}&prn=${props.prn}&tokensCount=${props.tokensCount}&account=${props.account}&trnnum=${props.trnnum}`}><a><Button primary>Show Transaction</Button></a></Link>
  </div>
);
}

export default Home;
