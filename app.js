const express = require("express");
const morgan = require("morgan");
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerEditor = require('swagger-editor');
const routeOne = require("./routes/routeOne.route");
const routeTwo = require("./routes/routeTwo.route");
const AppError = require('./utils/AppError.util');
const globalErrorHandler = require('./controllers/error.controller');
// const http = require('http');
const fs = require('fs');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Users API",
      version: "1.0.0",
      description: "A simple Express Users API",
    },
    servers: [
      {
        url: "http://localhost:3000/routeOne",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

fs.writeFile('./swagger.json', JSON.stringify(specs), (err) => {
  if (err) console.log(err);
});

const app = express();

app.use("/apidocs", swaggerUI.serve, swaggerUI.setup(specs));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/routeOne", routeOne);
app.use("/routeTwo", routeTwo);

app.all("*", (req, res, next) => {
  // const err = new Error(`Cannot find ${req.originalUrl} path`);
  // err.status = "fail";
  // err.statusCode = 404;
  next(new AppError(`Cannot find ${req.originalUrl} path!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;

