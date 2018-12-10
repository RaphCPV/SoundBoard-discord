exports.run = (client, message) => {
  if (message.mentions.members.size === 0) {
    return message.channel.send('Please mention a user');
  }
  for( let i =0; i< 20; i++){
    setTimeout(()=>{
      message.channel.send(`${message.mentions.members.first()}`)
        .then(message => {
          message.react('❤');
        }).catch(() => {});
    },5000);
  }
};