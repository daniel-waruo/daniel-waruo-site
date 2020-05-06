import mailer from '../../lib/mailer'

export default (req, res) => {
  if (req.method === 'POST') {
    if (!req.body) {
      res.status(400).json({
        error: error,
        message: 'No Data in Response'
      });
      return
    }
    const {email, name, message} = req.body;
    mailer({email, name, text: message}).then(info => {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        message: 'Email Sent ! I will be in touch soon.'
      });
    }).catch(error => {
      console.log(error);
      res.status(400).json({
        error: error,
        message: 'Email Not Sent ! Try again in a few minutes.'
      });
    });
    return
  }
  res.status(403).json({
    message: `${req.method} requests not allowed`
  })
}