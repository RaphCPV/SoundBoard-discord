exports.run = (client, message) => {
  message.channel.send(`Hello ${message.author}, how are you my budda ?`)
    .then(message => {
      message.react('💩'); // Poop
    }).catch(console.error);
  message.delete();
};