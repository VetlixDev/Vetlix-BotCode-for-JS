module.exports = {
    name: 'avatar',
    description: 'Get a user\'s avatar',
    execute(message, args, Discord){
        let embed = new Discord.MessageEmbed()
        .setTitle('You discord avatar')
        .setImage(message.author.displayAvatarURL())
        .setFooter('JS Bot avatar Command')

    message.channel.send(embed);
    }
}
