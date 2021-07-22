client.on('guildMemberAdd', member => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Welcome To the Recording Server!")
    .setDescription(`Welcome ${member.user.username} to the Server! Be sure to read the rules and grab some role.`)
    .setTimestamp()
    .setColor("#B026FF")
    .setThumbnail(member.user.displayAvatarURL())
    .setFooter(client.user.username, client.user.displayAvatarURL())

    member.guild.channels.cache.get("865658302036443157").send(embed)
});
