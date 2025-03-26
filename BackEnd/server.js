require("dotenv").config();
const express = require("express");
const aiRoutes = require("./src/routes/ai.routes");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5177", "https://syntax-iq-ai.vercel.app"], // Allow frontend URLs
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
