import { createServer } from "./server";
import { createPrismaClient } from "./prisma/client";
import { AppStage } from "./types";

const port = process.env.PORT || 3333;
const stage = (process.env.NODE_ENV === "production" ? "production" : "development") as AppStage;

const prisma = createPrismaClient({ mode: stage });

const { app } = createServer({ stage, prisma });

const server = app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

server.on("error", console.error);
