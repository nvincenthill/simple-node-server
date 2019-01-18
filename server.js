const app = require('./app.js');

app.listen(app.get('port'), () =>
  console.log(`listening on port ${app.get('port')}...`)
);
