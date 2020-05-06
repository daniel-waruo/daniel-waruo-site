import nodemailer from 'nodemailer'

const send = ({email, name, text}) => {

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const from = name && email ? `${name} <${email}>` : `${name || email}`;

  const message = {
    from,
    to: 'waruodaniel@gmail.com',
    subject: `New message from ${from}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    smtpTransport.sendMail(message, (error, info) => {
        error ? reject(error) : resolve(info);
        smtpTransport.close();
      }
    )
  })
};

module.exports = send;