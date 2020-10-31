import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x14044D44d4b91D6963b705622Ec714fe33C80DD4'
);

export default instance;
