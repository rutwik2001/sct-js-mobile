import web3 from './web3';
import scrtABI from './build/scrtabi.json';


const instance = new web3.eth.Contract(scrtABI, '0x750EbBfBD277d43929aA2D7a8d737F4a8EEBe817')

export default instance;