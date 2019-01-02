exports.run = (client, message, args, level) => {
  if (!args[0]) {
    const Discord = require('discord.js');

    const embed1 = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription(`\n**Commands:**\n**g!help** - Provides list of commands.\n**g!ping** - Gets bot response time.\n**g!info** - Provides bot stats and information.\n**g!logs** - Setup server logs.\n**g!kick** - Kick\'s a user from the server.\n**g!ban** - Ban\'s a user from the server.`)
    .setFooter(`Guard | Shard ${client.shard.id}/${client.config.totalShards}`)
    .setColor('#1475EE')
    message.channel.send(embed1)
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      const Discord = require('discord.js');
      const embed2 = new Discord.RichEmbed()
      .setDescription(`**Command:** ${command.help.name}\n**Description:** ${command.help.description}\n**Usage:** ${command.help.usage}`)
      embed2.setColor('#1475EE');
      message.channel.send(embed2);
    }
  }
};


exports.help = {
  name: 'help',
  category: 'System',
  description: 'Provides list of commands.',
  usage: 'g!help [command]'
};