const { Engine } = require('json-rules-engine');
let rules = require('./rules/dnd-kbs-rules.json');

const processEngine = (inputs, decisions) => {
  let engine = new Engine(decisions);

  return engine.run(inputs).then((results) => {
    console.log(results.events);
    return results.events;
  });
};

// Creating input parameter
const inputs = {
  'player-level': 3,
  'adventure-type': 'Standard',
  'dm-difficulty': 'Easy',
  'player-difficulty': 'Easy',
  location: 'Rural Land',
  'published-year': 2021,
};

// Pass the decisions property from employeesalary rule object
processEngine(inputs, rules.decisions);
