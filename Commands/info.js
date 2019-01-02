exports.run = async (client, message, args, id) => {
    const Discord = require('discord.js');
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let info = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField('Version', client.config.version, true)
    .addField('Library', 'discord.js', true)
    .addField('Users', client.users.size, true)
    .addField('Servers', client.guilds.size, true)
    .addField('Owner', 'landon#7847', true)
    .addField('Memory Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .setColor('#1475EE')
    .setFooter(`Guard | Shard ${client.shard.id}/${client.config.totalShards} | Uptime ${hours} hours, ${minutes} minutes`)
    message.channel.send(info)
}

exports.help = {
    name: 'info',
    category: '',
    description: 'Provides bot information.',
    usage: 'g!info'
  };