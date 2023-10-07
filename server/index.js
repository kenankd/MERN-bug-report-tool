import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

