import { config } from "dotenv"

interface EnvInterface {
  PORT: string,
  CLIENT_URL: string,
  DATABASE_URL: string,
}

config();

const loadEnv = (): EnvInterface => {
  const envInfo = [
    "PORT",
    "CLIENT_URL",
    "DATABASE_URL",
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
  }
}

export const EnvVars = loadEnv();