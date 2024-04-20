const fs = require('fs')
let path = require('path')
let dataFilePath =  path.join(__dirname, '../database/coinmarketcap/data.json');

async function handlePost(req, res, next) {
  let {body} = req

  if (body) {
    let content = JSON.stringify(body)
    fs.writeFileSync(dataFilePath,content,{encoding:'utf8',flag:'w'})
  }

  res.send('Ran!');
}
async function handleGet(req, res, next) {
  
  fs.readFile(dataFilePath, 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    res.json(obj);

  });
  
}
module.exports = { handlePost, handleGet };
