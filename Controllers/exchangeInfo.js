const RedisSetup = require("../database/redis/Setup");
const RedisImports = require("../database/redis/exports");
const BinanceIpmorts = require("../database/binance/exports");
const {Redis_Binance_exchangeInfo} = RedisImports
async function handleGet(req, res, next) {
  
    const ClientInstance = new RedisSetup();
    const client = await ClientInstance.getCient();
    await client.hGetAll('Binance_exchangeInfo').then((val)=>{
        res.json(val);
        ClientInstance.disconnectCient()
    });
  
}
async function handleUpdateGet(req, res, next) {
    Redis_Binance_exchangeInfo(BinanceIpmorts,RedisImports)
    res.send('done!')
}
module.exports = {  handleGet, handleUpdateGet };
