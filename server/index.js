import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import authRoutes from '../routes/auth.routes.js'
const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/bug-report').then(
    () => console.log('Connected!')
);

app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

