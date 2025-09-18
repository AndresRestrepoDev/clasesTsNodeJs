import type { Request, Response, NextFunction } from "express";
import fs from "fs";

export function logger(req: Request, res: Response, next: NextFunction) {
  const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

  const log = `[${new Date().toLocaleString()}] ${req.method} ${
    req.url
  } - Memory: ${memoryUsage} MB - User: ${
    req.headers["x-user-role"] || "unknown"
  }\n`;

  fs.appendFileSync("logs.txt", log, "utf-8");
  console.log("📄 Log registrado:", log.trim());

  next();
}

