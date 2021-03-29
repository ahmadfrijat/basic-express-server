'use strict';
require('dotenv').config();
// const server = ....
// server.start()
require('./src/server').start(process.env.PORT);