const app = require("./app")
require("dotenv-flow").config();

const startServer = async () => {
  const port = "4000";
    app.listen(port, () => console.log("App and Running " + port));
  };
  
startServer();