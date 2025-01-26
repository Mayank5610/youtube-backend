const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const connectDB = require("./db");
const { app } = require("./app");

connectDB()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at port - ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log("MongoDb connection failed! - ", error);
  });
