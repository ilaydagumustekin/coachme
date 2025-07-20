const amqp = require('amqplib');

async function sendMessage() {
  try {
    const connection = await amqp.connect('amqp://rabbitmq');
    const channel = await connection.createChannel();

    const queue = 'hello';
    const message = 'Merhaba, RabbitMQ!';

    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(message));

    console.log(`[x] Kuyruğa gönderildi: ${message}`);

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 500); // Bağlantıyı kapat
  } catch (error) {
    console.error('Mesaj gönderilirken hata oluştu:', error);
  }
}

sendMessage();
