const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Merhaba, Node.js web API\'si!');
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
});
