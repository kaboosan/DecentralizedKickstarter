import Web3 from 'web3'

//const web3 = new Web3(window.web3.currentProvider);
let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  web3 = new Web3(window.web3.currentProvider);
} else{
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/40bac82fe32948d1af100e1405d0b09a'
  );
  web3 = new Web3(provider);
}

export default web3;
