const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const fetch = require('node-fetch');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
//   var interval = setInterval(function(){ 
//   console.log("hello");
//   const channel = client.channels.cache.find(channel => channel.id == "746034623670124685");
//      channel.send("Drink beer save");
// }, 1*30000);

});

client.on('message', async function (msg) {

  
   //console.log(msg); 
   
   if(msg.channel.id!="746034623670124685") return;
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === '!remind') {
    msg.channel.send(msg.author.tag + " Drink water");
  }
  if (msg.content === '!joke') {
    //  fetch("https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist").then(console.log);
    
    fetch("https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist").then(async function (res){
        jsonres = await res.json();
        console.log(jsonres);
        if(jsonres.type=="single"){
            msg.channel.send(
                jsonres.joke
            );
        }
        if(jsonres.type=="twopart"){
            msg.channel.send(
                jsonres.setup +"\n\n\ " + jsonres.delivery
            );
        }
       
    }).catch(console.log);
  
    
  }

});

client.login(process.env.token);