import express, { response } from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.get('/', (req, res) => {
  //get data first
  res.json(data);
});

app.post('/newItem', (req, res) => {
  res.send(`A post request with /newItem on port ${PORT}`);
});

app.get('/item/:id', (req, res) => {
  console.log(req.params.id);
  let user = Number(req.params.id);
  console.log(user);
  console.log(data[user]);
  res.send(data[user]);
});

app.put('/item', (req, res) => {
  res.send(`A put request with /item route on port ${PORT}`);
});

app.delete('/item', (req, res) => {
  res.send(`A get request with / route on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on the port ${PORT}`);
  console.log(data);
});
