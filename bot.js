const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592778074521731083")
setInterval(function() {
channel.send(`**Sugar daddy Sugar daddy Sugar daddy Sugar daddy Sugar daddy Sugar daddy **`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
