import sgMail from '@sendgrid/mail';

export default async (req, res) => {
  if (req.method === 'POST') {
    if (!req.body) {
      res.status(400).json({
        error: error,
        message: 'No Data in Response'
      });
      return
    }

    const {email, name, message} = req.body;

    await sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

    const from = name && email ? `${name} <${email}>` : `${name || email}`;

    await sgMail.send({
      to: 'waruodaniel@gmail.com',
      from: 'admin@daniel-waruo.now.sh',
      subject: `New message from ${from}`,
      text: message,
    });

    res.status(200).json({
      message: 'Email Sent ! I will be in touch soon.'
    });
    return
  }
  res.status(403).json({
    message: `${req.method} requests not allowed`
  })
}