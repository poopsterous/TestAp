const RedisSetup = require("../redis/Setup");
const {Redis_updatedNow} = require("../redis/exports");

async function fetchExchangeInfo() {
  let data,
    url = "https://api.binance.com/api/v1/exchangeInfo",
    key = "Binance_exchangeInfo";
  const ClientInstance = new RedisSetup();
  const client = await ClientInstance.getCient();

  let myPromise = new Promise(async function(myResolve, myReject) { 
    fetch(url)
      .then((response) => response.json())
      .then(async (jsonData) => {
        data = jsonData.symbols;

        let hasDone = data.map((v) => {
          let field = v.symbol;
          return client.hSet(key, field, JSON.stringify(v));
        
        });


      await Promise.all(hasDone).then(async () => {

          myResolve('Binance_exchangeInfo: Updated ')

          ClientInstance.disconnectCient()
      })
      })
  })
 return myPromise
}

module.exports = fetchExchangeInfo;
