import { CronJob } from "cron";

// const context: CronContext = { prisma };

const crons: CronJob[] = [];

crons.forEach((job) => job.start());
