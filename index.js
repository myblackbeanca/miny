const { exec } = require('child_process');
const path = require('path');
const express = require('express');
const app = express();

// Serve static files from the public and pages directories
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'pages')));

app.get("/", (req, res) => {
    exec('npx tailwindcss -i ./styles/input.css -o ./public/out.css', (err, stdout, stderr) => {
        if (err) {
            console.error(`Error: ${stderr}`);
            res.status(500).send("Internal Server Error");
            return;
        }
        console.log(stdout);
        res.sendFile(path.join(__dirname, 'pages/index.html'));
    });
});

app.listen(3000, () => {
    console.log("🚀 Shipping on port 3000");
});
