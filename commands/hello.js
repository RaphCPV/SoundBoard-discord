exports.run = (client, message) => {
    message.channel.send(`Hello ${message.author}, how are you my budda ?`).then(function (message) {
        message.react("💩"); //poop
    }).catch(console.error);
}