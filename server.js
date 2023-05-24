require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const server = express();
const router = require('./routes');
const morgan = require('morgan')

require('./database/dbconnection.js')
const port = process.env.PORT || "3000";
const host = process.env.HOST || "0.0.0.0";

const morganOpts = {
    skip: () => process.env.NODE_ENV === 'test'
}

server.set('port', port);

server.use(cors());
server.use(morgan('dev', morganOpts))
server.use(express.json());

server.use(express.static(path.join(__dirname, "assets")));
console.log(__dirname);

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use("/api", router);

server.listen(port, host, function() { 
    console.log("listening on port " + port);
    console.log("http://localhost:" + port);
})

module.exports = server;