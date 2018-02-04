var http = require('http');
var server = http.createServer();

const Discord = require('discord.js');
const client = new Discord.Client();
var config = require('./config.json');

client.on('ready', () => {
    client.user.setActivity('@Lunatik fall apart..', {type: 'WATCHING'});
});

client.on('message', msg => {
    if (!msg.content.startsWith(config.cmd) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(config.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('What can a dead guy help you with?');
    else if (command === 'invite') return msg.channel.send("https://discordapp.com/oauth2/authorize?client_id=335544459901009920&scope=bot");
});

client.login(config.token);
server.listen(process.env.PORT || 5000);

