const Discord = require('discord.js');
const disbut = require('discord-buttons');

module.exports = {
    name: "button",
    description: "A simple button command!",
    async execute(message, args, Discord){
        let button = new disbut.MessageButton()
        .setStyle("green")
        .setLabel("A cool button")
        .setID('button_cool')

        message.channel.send('This is a very cool button! Subscribe to vetlix!', button)
    }
}
