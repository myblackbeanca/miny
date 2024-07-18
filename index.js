const { exec } = require('child_process');
const path = require('path');
const express = require('express');
const app = express();

// Build Tailwind CSS once when the server starts
exec('npx tailwindcss -i ./styles/input.css -o ./public/out.css', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error building Tailwind CSS: ${stderr}`);
    return;
  }
  console.log(stdout);
  
  // Serve static files from the 'public' directory
  app.use(express.static(path.join(__dirname, 'public')));

  // Serve HTML pages from the root directory
  app.use(express.static(__dirname));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(3000, () => {
    console.log("🚀 Shipping on port 3000");
  });
});
