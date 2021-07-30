import express from 'express';
import dotenv from 'dotenv';
import homeRouter from './src/routes/homeRouter';
import db from './src/db/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.database = db;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRouter);
  }
}
export default new App().app; // já exporta instanciado o express (App.app)
