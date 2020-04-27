var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('We are in!');
});

app.listen(3000, () => console.log('server connected'));