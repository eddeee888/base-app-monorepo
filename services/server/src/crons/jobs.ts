import { CronJob } from "cron";
import cron1Handler from "./handlers/cron1/handler";

// Note: This file only runs in dev. Prod runs lambdas

const crons = [
  new CronJob("0 */5 * * * *", cron1Handler), // Every 5 mins
];

crons.forEach((job) => job.start());
