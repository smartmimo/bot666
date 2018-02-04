var http = require('http');
var server = http.createServer();

const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');

var config = require('./config.json');

client.on('ready', () => {
	console.log('It is up!');
    client.user.setActivity('@Lunatik fall apart..', {type: 'WATCHING'});
});


client.on('message', msg => {
    if (!msg.content.startsWith(config.cmd)) return; //|| !msg.guild) return;
	
	const args = msg.content.slice(config.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	
	switch (command) {
		case "help" :
			msg.channel.send('What can a dead guy help you with?');
		break;
		case "invite" :
			msg.channel.send("https://discordapp.com/oauth2/authorize?client_id=335544459901009920&scope=bot");
		break;
		case "join" :
			if (msg.member.voiceChannel) {
				msg.member.voiceChannel.join()
				.then(connection => { // Connection is an instance of VoiceConnection
				msg.reply('I have successfully connected to the channel!');
				})
				.catch(console.log);
			} 
			else {
				msg.reply('You need to join a voice channel first!');
			}
		break;
		case "roll" :
			let min = parseInt(args[0]);
			let max = parseInt(args[1]);
			if (!min || !max) return msg.channel.send("Please use it this way: !roll number1 number2");

			else {
				msg.reply("Rolling a number between "+min+" and "+max+"..."); 
				var num = Math.floor(Math.random() * (max - min) + min); 
				msg.reply(num);
			}
		break;
		case "play":
			let url = args[0];
			msg.member.voiceChannel.join()
			.then(connection => {
			return connection.playArbitraryInput(url);
			})
			.then(dispatcher => {
			dispatcher.on('error', console.error);
			// You can also do things like dispatcher.pause() and dispatcher.end() here.
				dispatcher.pause();
			})
			.catch(console.error);	
		break;
		case "ytdl":
			let yturl = args[0];
			msg.member.voiceChannel.join()
			.then(connection => {
			const stream = ytdl(yturl, {filter : 'audioonly'});
			const dispatcher = connection.playStream(stream);
			})
		break;

}
    
});

client.login(config.token);
server.listen(process.env.PORT || 5000);

