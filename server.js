const express = require('express');
const path = require('path');

// setup express server
const app = express();
app.set('port', (process.env.PORT || 3001));

// only serve static assets in production - use webpack dev sever in development
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  // everything else not otherwise specified by API directives above
  // should go to client
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
  });
}

// start server
const os = require('os');
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://${os.hostname()}:${app.get('port')}/`); // eslint-disable-line no-console
});
