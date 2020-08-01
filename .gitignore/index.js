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

});
