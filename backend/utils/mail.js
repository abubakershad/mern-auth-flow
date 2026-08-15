import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendOtpMail = async (to, otp) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject: "Password Reset OTP",
    html: `
            <div>
                <h2>Password Reset</h2>
                <p>Your OTP for resetting your password is:</p>
                <h1>${otp}</h1>
                <p>This OTP will expire in 10 minutes.</p>
                <p>If you did not request a password reset, please ignore this email.</p>
            </div>
            `,
  });
};
