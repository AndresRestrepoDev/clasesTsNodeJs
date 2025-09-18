import cron from "node-cron";
import fs from "fs";
import { transporter } from "../utils/mailer.ts";

// Función para enviar correo con los logs
function sendEmailLogs() {
  let logs = "";

  if (fs.existsSync("logs.txt")) {
    logs = fs.readFileSync("logs.txt", "utf-8");
  }

  // Si no hay contenido, manda un mensaje por defecto
  if (!logs.trim()) {
    logs = "⚠️ No hay logs registrados en este periodo.";
  }

  console.log("DEBUG: Logs que se enviarán por correo:\n", logs);

  const mailOptions = {
  from: process.env.MAIL_USER,
  to: "correo al que quieres que lleguen los logs", // <----------
  subject: "📊 Reporte de Logs - CronJob",
  html: `
    <h2>Hola Andres 👋</h2>
    <p>Aquí tienes el reporte más reciente:</p>
    <pre style="background:#f4f4f4;padding:10px;border-radius:5px;">${logs}</pre>
    <p>Saludos,<br>Tu servidor 🚀</p>
  `
};


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error("❌ Error enviando correo:", error);
    }
    console.log("📩 Correo enviado:", info.response);
  });
}

// Cron: cada minuto
cron.schedule("* * * * *", () => {
  console.log("📧 Enviando logs por correo...");
  sendEmailLogs();
});
