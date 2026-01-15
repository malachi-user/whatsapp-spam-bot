const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('QR Code received, scan with WhatsApp');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (msg) => {
    console.log('Message received:', msg.body);
});

client.initialize();

console.log('WhatsApp bot starting...');
