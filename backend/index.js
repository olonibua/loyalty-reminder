const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path"); // Import path module

const userRoutes = require("./routes/userRoutes");
const reminderRoutes = require("./routes/reminderRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use(userRoutes);
app.use(reminderRoutes);

// Serve static files from the frontend build directory
const buildPath = path.join(__dirname, "frontend/build");
app.use(express.static(buildPath));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
