const app = require('./app-module');
const PORT = 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Faleproxy server running at http://localhost:${PORT}`);
});
