const discord = require('discord.js');
module.exports = async (client, message, Manager) => {
    const index = require('../index.js');
    const deletelog = new discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setDescription(`A message sent by ${message.author.tag} was deleted in ${message.channel}`)
    .addField("Content", `\n${message.cleanContent}`)
    .setFooter("ID: " + message.id)
    .setColor(message.member.displayColor)
    .setTimestamp()
}