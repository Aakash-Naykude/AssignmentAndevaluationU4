const connect = require("./config/db");

const app = require("./app");
app.listen(4000, async function () {
  await connect();
  console.log("Listening on Port 4000");
});
