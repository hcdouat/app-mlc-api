import express from "express";
import { itemsRouter } from "./routes/items.routes";

import cors from "cors";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",           // local dev (Vite)
    "https://lively-sea-06285ed0f.3.azurestaticapps.net" // deployed SWA
  ],
}));

app.get("/health", (_req, res) => res.status(200).json({ status: "ok" }));

app.use(express.json());
app.use("/api", itemsRouter);

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
