import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import authRoutes from './routes/auth.routes.js'
import bugRoutes from './routes/bug.routes.js'
import cors from 'cors';

const app = express();
const PORT = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/bug-report').then(
    () => console.log('Connected!')
);
app.use(cors({origin:'http://localhost:3000'}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/auth',authRoutes);
app.use('/bugs',bugRoutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

