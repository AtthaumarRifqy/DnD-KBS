const { Engine } = require('json-rules-engine');

exports.processEngine = function(inputs, decisions) {
  let engine = new Engine(decisions);
  engine.addOperator('isKeywordsEmpty', (fact, value) => {
    if (!fact.length) return value;
    return !value;
  })

  return engine.run(inputs).then((results) => {
    console.log(results.events);
    return results.events;
  });
}