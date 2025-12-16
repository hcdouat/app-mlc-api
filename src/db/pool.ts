// Load dotenv ONLY in local dev
if (process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("dotenv").config();
}

import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("Missing env var DATABASE_URL");
}

export const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === "production"
    ? { rejectUnauthorized: false }
    : false
});
