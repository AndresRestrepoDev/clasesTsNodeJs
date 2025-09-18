import nodemailer from "nodemailer";
import "dotenv/config";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER, // tu correo Gmail
    pass: process.env.MAIL_PASS  // contraseña de aplicación
  }
});
