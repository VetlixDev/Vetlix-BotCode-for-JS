const ms = require('ms');
const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: "Clear a certain amount of messages",
    async execute(message, args){
        if(message.member.roles.cache.has('859477263153627136')){
            if(!args[0]) return message.channel.send("Please mention an amount of messages you want me to delete!");

            if(isNaN(args[0])) return message.channel.send("Invalid Usage! Use: js!clear ``<messages>``");

            if(args[0] > 150) return message.channel.send("Please mention a number less that 150 messages!");
            if(args[0] < 1) return message.channel.send("Please mention a number greater than 1!"); 

            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
                message.channel.send("All the messages specified have been deleted!").then(msg => {
                    msg.delete({timeout: 3000})
                })
            })
        }
        else {
            message.channel.send("This command requires you to have the ``Vetlix`` role!")
        }
    }
}
