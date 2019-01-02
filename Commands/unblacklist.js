const Discord = require('discord.js');
exports.run = async (client, message, args, level) => {
  const process = await message.channel.send('Processing...');
  const resolvedUser = (args[0] !== undefined) ? message.guild.members.get(args[0].match(/[0-9]/g).join('')) : null;
  const botuser = resolvedUser ? message.guild.members.get(resolvedUser.id) : null;
  const thisUser = botuser.id;
  
    try {
      if (client.blackList.get(thisUser)) {
        client.blackList.set(thisUser, false);
        message.delete();
        process.edit(`**${client.config.PatrolSuccess} Removed ${botuser.user.tag} from the blacklist.**`);
      } else {
        message.delete();
        return process.edit(`**${client.config.PatrolError} ${botuser.user.tag} was never added to the blacklist.**`);
      }
    } catch (err) {
      message.channel.send(err);
    }
  };
  