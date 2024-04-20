const createClient = require("redis").createClient;

class Setup {
  constructor() {}
  async getCient() {
    this.client = await createClient()
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect();
    return await this.client;
  }

  async disconnectCient() {
    await this.client.disconnect();
  }
}
module.exports = Setup;
