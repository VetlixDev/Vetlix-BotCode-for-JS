const Discord = require('discord.js');
const got = require('got');

module.exports = {
    name: 'meme',
    description: "A command to get random memes!",
    execute(message, args, Discord){
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permanentlink = content[0].data.children[0].data.permanentlink;
            let memeURL = `https://reddit.com${permanentlink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeURL}`)
            embed.setColor("BLUE")
            embed.setFooter(`${memeUpvotes} | ${memeDownvotes} | ${memeNumComments}`)
            embed.setImage(`${memeImage}`)
            message.channel.send(embed);
        })
    }
}
