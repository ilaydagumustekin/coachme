const amqp = require('amqplib');

async function receiveMessage() {
  try {
    const connection = await amqp.connect('amqp://rabbitmq');
    const channel = await connection.createChannel();
    const queue = 'user_notifications';

    await channel.assertQueue(queue, { durable: false });

    console.log(`[*] Kuyruk dinleniyor: ${queue}`);

    channel.consume(queue, (msg) => {
      console.log(`[x] Mesaj alındı: ${msg.content.toString()}`);
    }, { noAck: true });
  } catch (error) {
    console.error('Mesaj alınırken hata:', error);
  }
}

receiveMessage();
