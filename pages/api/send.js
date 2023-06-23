import nodemailer from 'nodemailer';

export default async function sendGmail(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.APP_PASSWORD,
      },
    });

    const toHostMailData = {
      from: req.body.email,
      to: process.env.GMAIL_TO,
      subject: "Message from ContactForm",
      text: `${req.body.message} sent from ${req.body.email}`,
    };

    await transporter.sendMail(toHostMailData);
    console.log("Email sent successfully");
    
    return res.status(200).end();
  } catch (error) {
    console.log("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
