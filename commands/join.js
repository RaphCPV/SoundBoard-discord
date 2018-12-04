exports.run = (client, message) => {
  if (!message.guild) {
    return console.log('not ok');
  }

  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(() => { // Connection is an instance of VoiceConnection
        message.delete();
      })
      .catch(console.log);
  } else {
    message.reply('You need to join a voice channel first!');
    message.delete();
  }
};
