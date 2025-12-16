import { pool } from "../db/pool";

export type ItemRow = Record<string, unknown>;

export async function getAllItems(): Promise<ItemRow[]> {
  const { rows } = await pool.query('SELECT * FROM "comercial"."negociacoes";');
  return rows;
}
