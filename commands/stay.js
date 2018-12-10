exports.run = (client, message) => {
  client.config.stay = true;
  message.channel.send('Next time you play a sound, i won\'t leave the channel')
    .catch(console.error);
};