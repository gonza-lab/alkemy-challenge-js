const express = require('express');
const path = require('path');
const clc = require('cli-color');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

class Server {
  constructor() {
    this.isDev = process.env.NODE_ENV !== 'production';
    this.PORT = process.env.PORT || 5000;
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: process.env.ORIGIN,
        optionsSuccessStatus: 200,
      })
    );

    if (this.isDev) {
      this.app.use(
        morgan(':date[clf] - :method :url :status - :response-time ms')
      );
    }
  }

  routes() {
    this.app.get('/api', function (req, res) {
      res.json({ ok: true });
    });

    // ROUTES
    this.app.use('/api/user', require('./routes/user'));
    this.app.use('/api/category', require('./routes/category'));
    this.app.use('/api/operation', require('./routes/operation'));

    this.app.use(
      express.static(path.resolve(__dirname, '../../react-app/build'))
    );

    this.app.get('*', function (req, res) {
      res.sendFile(
        path.resolve(__dirname, '../../react-app/build', 'index.html')
      );
    });
  }

  execute() {
    this.app.listen(this.PORT, () => {
      if (this.isDev) {
        process.stdout.write(clc.erase.screen);
        process.stdout.write(clc.move.top);
      }

      console.log('Server Online');
      console.log(`Puerto ${this.PORT}`);
    });
  }
}

new Server().execute();
