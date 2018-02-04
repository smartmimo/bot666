http = require 'http'
handle = (req, res) -> res.end "hit"

server = http.createServer handle

server.listen process.env.PORT || 5000

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('@Lunatik fall apart..', {type: 'WATCHING'});
});

client.on('message', msg => {
    if (!msg.content.startsWith("!") || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr("1");
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('What can a dead guy help you with?');
    else if (command === 'invite') return msg.channel.send("https://discordapp.com/oauth2/authorize?client_id=335544459901009920&scope=bot");
});

client.login("MzM1NTQ0NDU5OTAxMDA5OTIw.DVglYw.FHck6GHqnMvVh63GvyrVeWihkok");
