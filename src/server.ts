import express from "express";
import { itemsRouter } from "./routes/items.routes";

const app = express();

app.get("/health", (_req, res) => res.status(200).json({ status: "ok" }));

app.use(express.json());
app.use("/api", itemsRouter);

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
