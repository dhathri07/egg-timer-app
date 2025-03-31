const { spawn } = require('child_process');
const express = require('express');

const app = express();
const PORT = 8080; // You can change the port if needed

app.use(express.static('public'));

app.get('/start', (req, res) => {
    const timerProcess = spawn('./timer'); // Spawn the C program

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    timerProcess.stdout.on('data', (data) => {
        res.write(`data: ${data}\n\n`);
    });

    timerProcess.on('close', () => {
        res.end();
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
