const Discord = require('discord.js');
exports.run = async (client, message, args, level) => {
    if (message.guild.channels.exists('name', 'guard_logs')) return message.channel.send(`**${client.config.PatrolError} It appears a log channel is already setup, or have another channel named logs!**`)
    var server = message.guild;
   const yess = await message.channel.send('Are you sure you would like the bot to create a log channel?')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 5000 });
    console.log(collector)
    collector.on('collect', async message => {
        if (message.content == "yes") {
           const creating = await message.channel.send('Creating log channel...')
            message.guild.createChannel('guard-logs'); 
            creating.edit(`**${client.config.PatrolSuccess} Sucessfully created log channel.**`)
        } else if (message.content == "no") {
            message.channel.send(`**${client.config.PatrolError} Action cancelled.**`);
        }
    })

}


exports.help = {
    name: 'logs',
    category: 'Moderation',
    description: 'Setup server logs.',
    usage: 'g!logs'
  };