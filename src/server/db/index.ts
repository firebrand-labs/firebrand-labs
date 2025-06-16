import postgres from "postgres";
import * as schema from "./schema";
import { env } from "@/env";
import { drizzle } from "drizzle-orm/postgres-js";

const globalConnection = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalConnection.conn ?? postgres(env.DATABASE_URL);
if (env.NODE_ENV !== "production") globalConnection.conn = conn;
export const db = drizzle(conn, { schema });
