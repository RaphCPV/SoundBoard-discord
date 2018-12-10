exports.run = (client, message) => {

  if (!message.guild) {
    return;
  }

  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => {
        const dispatcher = connection
          .playFile(client.config.soundspath+'HOHOHOHO.mp3');
        dispatcher.setVolume(0.5);
        dispatcher.on('end', () =>{
          if(!client.config.stay) {
            message.member.voiceChannel.leave();
          }
        });
        message.delete();
      })
      .catch(console.error);

  } else {
    message.reply('You need to join a voice channel first!');
    message.delete();
  }
};