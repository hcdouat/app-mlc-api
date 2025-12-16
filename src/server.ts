import express from "express";

const app = express();

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// IMPORTANT: Azure injects PORT
const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
