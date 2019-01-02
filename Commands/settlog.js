const client = require('../index.js');
const config = require('../config.js');
exports.run = async (client, message, args, level) => {

  if (!args[0]) return message.channel.send(`Please mention a channel.`)
  if (!client.settings.has(message.guild.id)) client.settings.set(message.guild.id, {});
  client.settings.set(message.guild.id, 'logs', args[0]);
  message.channel.send(`Set message log channel to <#${args[0]}>`);
}
