import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { success, error } from '../utils/Response';
import { EVENT_MAIL_TEMPLATE } from '../utils/MailTemplate';
dotenv.config();

const smtp = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const MailController = {
  sendMail: (req, res) => {
    const { to, subject, bodyMail } = req.body;
    const mailOptions = {
      from: process.env.MAIL_USER,
      to,
      subject,
      html: EVENT_MAIL_TEMPLATE(bodyMail),
    };
    smtp.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
        return error(res, err, 'Mail not sent');
      }
      return success(res, data, 'Mail sent successfully');
    });
  },
};

export default MailController;
