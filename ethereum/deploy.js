const HDwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDwalletProvider(
  'coffee display fury ranch chat extra eagle clutch group student unfair ensure',
  'https://rinkeby.infura.io/v3/40bac82fe32948d1af100e1405d0b09a');

  const web3 = new Web3(provider);

  const deploy = async () => {
    //Get a list of all accounts
    const accounts = await web3.eth.getAccounts();

    console.log('Attemp to deploy from account', accounts[0]);

    //Use one of those accounts to deploy a contract
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to :', result.options.address);
  };
  deploy();
