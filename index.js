const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  var interval = setInterval(function(){ 
  console.log("hello");
  const channel = client.channels.cache.find(channel => channel.id == "746034623670124685");
     channel.send("Drink beer save");
}, 1*30000);


});

client.on('message', msg => {

  
   //console.log(msg); 
   if(msg.channel.id!="746034623670124685") return;
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === '!remind') {
    msg.reply(msg.author.tag + " Drink water");
  }


});

client.login(process.env.token);