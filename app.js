import express from 'express';
import { processEngine } from './engine.js';
import rules from './rules/dnd-kbs-rules.json' assert { type: 'json' };

const app = express();
const port = 3000;
import bodyParser from 'body-parser';

//Set view engine to ejs
app.set('view engine', 'ejs');

//Tell Express where we keep our index.ejs
app.set('views', './views');

//Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});

app.get('/result', (req, res) => {
  // Input dari req
  const inputs = {
    'player-level': 3,
    'adventure-type': 'Standard',
    'dm-difficulty': 'Easy',
    'player-difficulty': 'Easy',
    location: 'Rural Land',
    'published-year': 2021,
  };

  processEngine(inputs, rules.decisions).then((result) => {
    console.log(result);
    res.render('index', { campaign: result[0].params.campaign });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
