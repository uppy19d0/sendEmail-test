const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'mail.triptournow.com',
    port: 587,
    secure: false, // STARTTLS
    auth: {
        user: 'soporte@triptournow.com',
        pass: 'tRip2025$.ttt'
    },
    tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
    },
    logger: true,
    debug: true
});

// prueba enviar correo:
const mailOptions = {
    from: 'soporte@triptournow.com',
    to: 'luisaneuris60@gmail.com',
    subject: 'Prueba final SMTP',
    text: 'Prueba corregida con nodemailer desde puerto 587 STARTTLS.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('❌ Error enviando correo:', error);
        return;
    }
    console.log('✅ Correo enviado exitosamente:', info.response);
});
