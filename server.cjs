const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  },
}));

app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=604800');
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5174;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
