import type { Request, Response } from "express";
import { getAllItems } from "../models/items.model";

export async function listItems(req: Request, res: Response) {
  try {
    const rows = await getAllItems();
    res.status(200).json(rows);
  } catch (err) {
    console.error("listItems error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
