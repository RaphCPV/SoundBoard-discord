exports.run = (client, message) => {
  //const broadcast = client.createVoiceBroadcast();

  if (!message.guild) {
    return console.log('not ok');
  }

  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => { // Connection is an instance of VoiceConnection
        connection.playArbitraryInput('./roll.mp3');
        /* Const dispatcher = connection.playFile('./roll.mp3');
                    dispatcher.setVolume(1);
                    dispatcher.resume();
                    console.log("stream");
                    dispatcher.on('finish', () => {
                        console.log('Finished playing!');
                    });
                    */
        message.delete();
      })
      .catch(console.log);
  } else {
    message.reply('You need to join a voice channel first!');
    message.delete();
  }
};
