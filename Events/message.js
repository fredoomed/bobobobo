module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
    if (message.channel.type == 'dm'){
      const Discord = require('discord.js');
      const embed = new Discord.RichEmbed()
      .setTitle('New DM')
      .setThumbnail(message.author.avatarURL)
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(`${message.author} > ${message.cleanContent}`)
      .setTimestamp()
      .setFooter(`User ID: ${message.author.id} | MSG ID: ${message.id}`)
      client.channels.get("525885139335774249").send(embed)
    }
    
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
   
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
   
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
   
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;

    if (client.blackList.get(message.author.id)) {
      return;
    }

    
    // Run the command
    cmd.run(client, message, args);
  };
