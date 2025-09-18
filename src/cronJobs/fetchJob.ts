import cron from "node-cron";
import axios from "axios";
import fs from "fs";

function saveLog(api: string, role: string) {
  const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
  const log = `[${new Date().toLocaleString()}] [CRON] API: ${api} - Role: ${role} - Memory: ${memoryUsage} MB\n`;
  fs.appendFileSync("logs.txt", log, "utf-8");
  console.log("✅ Log guardado por cron:", log.trim());
}

// Cron: cada 5 minutos
cron.schedule("*/30 * * * * *", async () => {
  console.log("⏰ Ejecutando cronjob de consumo de APIs...");

  try {
    await axios.get("http://localhost:3002/books");
    saveLog("Books API", "admin");

    await axios.get("http://localhost:3002/users");
    saveLog("Users API", "user");
  } catch (err) {
    console.error("❌ Error en cronjob:", err);
  }
});
