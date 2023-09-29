const express = require('express');
const path = require('path');
const app = express();

// Middleware pour servir les fichiers gzippés correctement
app.get('*.gz', (req, res, next) => {
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(path.join(__dirname, '.')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});