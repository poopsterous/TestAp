async function Redis_Binance_exchangeInfo({Binance_fetchExchangeInfo},{Redis_hasIntervalPassed}) {
  Binance_fetchExchangeInfo();
}
module.exports={Redis_Binance_exchangeInfo}