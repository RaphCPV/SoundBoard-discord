exports.run = (client, message) => {
  if (!message.guild) {
    return ;
  }

  if (message.member.voiceChannel) {
    message.member.voiceChannel.leave();
    message.delete();
  } else {
    message.reply('You need to join a voice channel first!');
  }
};