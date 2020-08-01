const Discord = require(`discord.js`);
const client = new Discord.Client();

client.login("NzM5MDU5NDgzMzI5ODIyNzMw.XyU8xw.uG4LNrDAqziF0EZnY3TT3v3h80E")

var prefix = ("d/")

client.on("message",(message) => {

    if(message.content === "Bonjour") {
        message.channel.send("**Salutation !**")
    }

if(message.content === prefix + "help"){
    message.channel.send("**Le `d/help` n'est pas disponible pour le moment, il est encore en dévelopement !**")

    if(message.content === prefix + "botinfo"){
     var embed = new Discord.RichEmbed()
     .setTitle("Infos BOT")
     .setDescription("Ceci est une desvription")
     .addField(".help","Page d'aide", true)
     .addField("Embed01", "Embed 01 !", true)
     ;setColor("0x23272A")
     .setFooter("Ceci est un footer")
     message.channel.sendEmbed(embed); 
     
}


});
