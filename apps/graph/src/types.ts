import { Router } from "express";

export type RouterCreator<P> = (params: P) => Router;
export type AppStage = "development" | "production";
