

async function _24hrws(BinanceSetup,RedisSetup) {

  let key = "Binance_24hrws";
  
  const ClientInstance = new RedisSetup();
  const client = await ClientInstance.getCient();
  BinanceSetup.websockets.prevDay(false, (error, value) => {
    let field = value.symbol;
    client.hSet(key, field, JSON.stringify(value));
  });
}
module.exports = _24hrws;
