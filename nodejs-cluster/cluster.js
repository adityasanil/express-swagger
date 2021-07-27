const http = require('http');
const cluster = require('cluster');
const numberOfCpus = require('os').cpus().length;


if(cluster.isMaster) {

  console.log('MASTER PROCESS: ', process.pid);

  for (let index = 0; index < numberOfCpus; index++) {
    cluster.fork()
  }

} else {
  http.createServer((req, res) => {
    const message = `Worker Process: ${process.pid}`

    console.log(message);

    res.end(message)
  }).listen(3000)
}