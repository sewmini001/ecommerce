import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("api running");
});

// server
const PORT = 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
