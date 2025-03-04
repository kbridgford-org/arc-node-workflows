const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World</title>
      <style>
        body { text-align: center; }
        h1 { font-size: 3em; }
        img { width: 500px; }
      </style>
    </head>
    <body>
      <h1>Hello World!</h1>
      <img src="thumbsUp.jpeg" alt="Vault Boy">
    </body>
    </html>
  `);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app;
