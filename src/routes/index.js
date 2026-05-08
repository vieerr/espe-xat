// serve router

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'src/views' });
});

router.get('/register', (req, res) => {
    res.sendFile('register.html', { root: 'src/views' });
});

module.exports = router;