const BinanceIpmorts = require("./database/binance/exports");
const express = require('express');
const Router_cryptomarketcap = require('./Routes/cryptomarketcap')
const Router_exchangeInfo = require('./Routes/exchangeInfo')
const Router_iconsLinks = require('./Routes/iconsLinks')
const {handleWs} = require('./Controllers/_Main24hrws')
const app = express();
const PORT = process.env.PORT || 3000;
var expressWs = require('express-ws')(app);



app.use(express.json({limit: '50mb'}));
app.use('/api/metadata',Router_cryptomarketcap);
app.use('/api/icons',Router_iconsLinks);
app.use('/api/exchangeInfo',Router_exchangeInfo);



app.ws('/api/ws', handleWs);
  

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});



async function main() {
}
main();
