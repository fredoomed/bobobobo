const Discord = require('discord.js');
exports.run = async (client, message, args, level) => {
  const process = await message.channel.send('Processing...');
  const resolvedUser = (args[0] !== undefined) ? message.guild.members.get(args[0].match(/[0-9]/g).join('')) : null;
  const botuser = resolvedUser ? message.guild.members.get(resolvedUser.id) : null;
  const thisUser = botuser.id;


  if (thisUser === message.author.id) return process.edit(`**${client.config.PatrolError} You cannot blacklist yourself.**`);
  if (thisUser === '432702644725743617') return process.edit(`**${client.config.PatrolError} You cannot blacklist the bot owner.**`);
  if (botuser.user.bot) return process.edit(`**${client.config.PatrolError} You cannot blacklist a bot user.**`); 
  
  try {
    if (client.blackList.get(thisUser)) {
      process.edit(`**${client.config.PatrolError} ${botuser.user.tag} is already blacklisted.**`);
    } else {
      if (thisUser === message.author.id) return process.edit(`**${client.config.PatrolError} You cannot blacklist yourself.**`);
      if (botuser.user.bot) return process.edit(`**${client.config.PatrolError}You cannot blacklist a bot user.**`); 
      if (client.blackList.set(thisUser, true)); return process.edit(`**${client.config.PatrolSuccess} Added ${botuser.user.tag} to the blacklist.**`);
    }
  } catch (err) {
    message.channel.send(err);
  }
};


