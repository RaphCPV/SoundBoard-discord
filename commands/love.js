exports.run = (client, message) => {
  if (message.mentions.members.size === 0) {
    return message.channel.send('Please mention a user to declare your love');
  }
  message.channel.send(`I luv U ${message.mentions.members.first()}`)
    .then(message => {
      message.react('❤');
    }).catch(() => {});
};
