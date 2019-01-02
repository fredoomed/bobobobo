const Discord = require('discord.js');
exports.run = async (client, message, args, level) => {
  if(message.author.id !== '432702644725743617') return message.reply(`${client.config.PatrolError} You do not have permissions to run this command.**`)
  const process = await message.channel.send('Processing...');
    if(!args || args.size < 1) return process.edit(`**${client.config.PatrolError} I cannot find that command.**`);
    const commandName = args[0];
    // Check if the command exists and is valid
    if(!client.commands.has(commandName)) {
      return process.edit(`**${client.config.PatrolError} I cannot find that command.**`);
    }
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    return process.edit(`${client.config.PatrolSuccess} **Reloaded** \`${commandName}\``)
  };

  exports.help = {
    name: 'help',
    category: 'System',
    description: 'Displays all the available commands for your permission level.',
    usage: 'help [command]'
  };