const Discord = require(`discord.js`);
const client = new Discord.Client();

client.login(process.env.TOKEN)

var prefix = ("d/")

client.on("message",(message) => {

    if(message.content === "Bonjour") {
        message.channel.send("**Salutation !**")
    }

if(message.content === prefix + "help"){
    message.channel.send("**Le `d/help` n'est pas disponible pour le moment, il est encore en dévelopement !**")
}


});
