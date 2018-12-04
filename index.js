const fs = require('fs');
const Discord = require('discord.js');
const Enmap = require('enmap');

const client = new Discord.Client();
const config = require('./config.json');

client.config = config;

client.on('ready', () => {
  client.user.setPresence({game: {name: `${config.prefix}help`}, type: 0});
});

fs.readdir('./events/', (err, files) => {
  if (err) {
    return console.error(err);
  }
  files.forEach(file => {
    const event = require(`./events/${file}`);
    const eventName = file.split('.')[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir('./commands/', (err, files) => {
  if (err) {
    return console.error(err);
  }
  files.forEach(file => {
    if (!file.endsWith('.js')) {
      return;
    }
    const props = require(`./commands/${file}`);
    const commandName = file.split('.')[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);
console.log('ok');
