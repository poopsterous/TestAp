const RedisSetup = require("../database/redis/Setup");




async function handleWs(ws, req) {
  const ClientInstance = new RedisSetup();
  const client = await ClientInstance.getCient();
  const data = await client.hGetAll("Binance_24hrws");
  setInterval(() => {
    if (data) {
      ws.send(JSON.stringify(data));
    }
  }, 4000);
}
module.exports = { handleWs };
