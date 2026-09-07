import { config } from "dotenv"

interface EnvInterface {
  PORT: string,
  CLIENT_URL: string,
  DATABASE_URL: string,
  BETTER_AUTH_SECRET: string,
  BETTER_AUTH_URL: string,
}

config();

const loadEnv = (): EnvInterface => {
  const envInfo = [
    "PORT",
    "CLIENT_URL",
    "DATABASE_URL",
    "BETTER_AUTH_SECRET",
    "BETTER_AUTH_URL"
  ]

  envInfo.forEach((ev) => {
    if (!process.env[ev]) {
      console.log(`Missing the env file ${ev}`);
    }
  })

  return {
    PORT: process.env.PORT as string,
    CLIENT_URL: process.env.CLIENT_URL as string,
    DATABASE_URL: process.env.DATABASE_URL as string,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
  }
}

export const EnvVars = loadEnv();