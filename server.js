// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });
require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db"))
  // .catch(err => console.log(err));

const port = process.env.PORT;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION');

  server.close(() => {
    process.exit(1);
  })
})
