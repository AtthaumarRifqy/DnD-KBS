const { Engine } = require('json-rules-engine');
let rules = require('./rules/dnd-kbs-rules.json');

const processEngine = (inputs, decisions) => {
  let engine = new Engine(decisions);
  engine.addOperator('isKeywordsEmpty', (fact, value) => {
    if (!fact.length) return value;
    return !value;
  })

  return engine.run(inputs).then((results) => {
    console.log(results.events);
    return results.events;
  });
};

const inputs = {
  'min-player-level': 3,
  'max-player-level': 8,
  'adventure-type': 'Standard',
  'dm-difficulty': 'Easy',
  'player-difficulty': 'Easy',
  'location': 'Rural Land',
  'published-year': 2022,
  'keywords': ['Grim & Gritty', 'Combat']
};

processEngine(inputs, rules.decisions);