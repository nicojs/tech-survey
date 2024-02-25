import { type Config } from "drizzle-kit";

import { env } from "~/env";

const connectionString = `postgresql://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@${env.POSTGRES_HOST}/${env.POSTGRES_DB}`;
export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: { connectionString },
  tablesFilter: ["tech-survey_*"],
} satisfies Config;
