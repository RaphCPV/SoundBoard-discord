exports.run = (client, message) => {

  if (!message.guild) {
    return;
  }

  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => {
        const dispatcher = connection
          .playFile(client.config.soundspath+'yugi.mp3');
        dispatcher.setVolume(0.5);
        //console.log(dispatcher);
        dispatcher.on('end', () => {
          if(!client.config.stay) {
            message.member.voiceChannel.leave();
          }
        });
        message.delete();
      })
      .catch(console.error);
  }

  else {
    message.reply('You need to join a voice channel first!');
    message.delete();
  }
};

/*WATCH OUT IDIOT DE RAPH : Path of the sound played should be relative to
* the index.js and not relative to the *commandnoun*.js */

