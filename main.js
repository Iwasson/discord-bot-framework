const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    client.user.setActivity("Listening for input...");
});

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { return }
    
    processMessage(receivedMessage);
});

async function processMessage(receivedMessage) {
    console.log(receivedMessage.content + " received");

    if(receivedMessage.content == "pohsib") {
        receivedMessage.reply("Hey I know that guy!");
    }
}

client.login(auth.token);