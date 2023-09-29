const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '.'))); // sert tous les fichiers statiques à partir du répertoire courant

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});