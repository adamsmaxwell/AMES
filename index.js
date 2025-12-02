import express from "express";

const app = express();
app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.render('index.ejs');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`AMES server listening on port ${port}`);
});