import * as dotenv from 'dotenv';
import * as express from 'express';
import * as cors from 'cors';
dotenv.config();

import sequelize from './db';
import {} from './models/models';
import router from './routes/index';
import errorMiddleware from './middleware/errorMiddleware';

const {PORT} = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello world'});
});

const start = async () => {
  try {
    sequelize.authenticate();
    sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
