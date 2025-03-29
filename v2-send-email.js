const email = require('emailjs');

const server = email.server.connect({
    user: "soporte@triptournow.com",
    password: "tRip2025$.ttt", // recuerda la 't' adicional
    host: "mail.triptournow.com",
    port: 587,
    tls: { ciphers: "SSLv3", rejectUnauthorized: false }
});

server.send({
    text: "Este es un correo de prueba enviado con emailjs",
    from: "soporte@triptournow.com",
    to: "correo_destino@example.com",
    subject: "Correo de prueba con emailjs"
}, (err, message) => {
    if(err) {
        console.error('❌ Error enviando correo:', err);
    } else {
        console.log('✅ Correo enviado correctamente:', message);
    }
});
