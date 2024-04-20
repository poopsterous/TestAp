const RedisSetup = require("../database/redis/Setup");
const path = require('path')
async function handleGet(req, res, next) {
  let {symbol} = req.params;

  let fileName = `/static/icons/${symbol}.svg`
  fileName=`${symbol}.svg`

  var options = {
    root: path.join(__dirname,'../', 'public/icons'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
    }
  })
  
}
module.exports = {  handleGet };