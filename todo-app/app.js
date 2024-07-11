const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

const publicPath = path.join(__dirname, 'public');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'GOJAR_FinalsEA1.html'));
});

app.use(express.static(publicPath));
app.use('/', router);

app.listen(port, () => {
    console.log(`To-Do List app listening at http://localhost:${port}`);
});
