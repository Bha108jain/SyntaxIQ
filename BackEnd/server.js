require("dotenv").config();
const express = require("express");
const aiRoutes = require("./src/routes/ai.routes");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: process.env.CORS,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", aiRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
