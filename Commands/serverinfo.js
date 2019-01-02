exports.run = async (client, message, args) => {
    const Discord = require('discord.js')
   try {
    function checkBots(guild) {
      let botCount = 0; 
      guild.members.forEach(member => { 
        if (member.user.bot) botCount++; 
      });
      return botCount; 
    }
    function checkMembers(guild) {
      let memberCount = 0;
      guild.members.forEach(member => {
        if (!member.user.bot) memberCount++; 
      });
      return memberCount;
    }
    const embed = new Discord.RichEmbed()
      .setAuthor(message.guild.iconURL, message.guild.name)
      .setThumbnail(message.guild.iconURL)
      .setColor(message.member.displayColor)
      .addField('Owner', message.guild.owner, true)
      .addField('Region', message.guild.region, true)
      .addField('Channels', message.guild.channels.size, true)
      .addField('Roles', `${message.guild.roles.size}`, true)
      .addField('Created', `${message.guild.createdAt.toLocaleString('en-US')}`, true)
      .addField('Members', message.guild.memberCount, true)
      .addField('Humans', checkMembers(message.guild), true)
      .addField('Bots', checkBots(message.guild), true)
      message.channel.send(embed);
        } catch (e) {
            message.channel.send(`${client.config.PatrolError} Something went wrong.`)
        }
}
