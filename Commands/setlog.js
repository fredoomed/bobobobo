const Discord = require('discord.js')
const db = require('quick.db');
const logs = new db.table('logs')
exports.run = async (client, message, args, tools) => {
if (!message.member.hasPermission('MANAGE_SERVER')) return message.channel.send(`${client.config.PatrolError} You must have the *Manage Server** permission.`);
if(!args[0]) return message.channel.send(`${client.config.PatrolError} No channel was provided.`)
let channelid = args[0].slice(2, -1)
let log = client.channels.get(channelid)
await logs.set(`logs_${message.guild.id}`, channelid)
let mchannel = await logs.fetch(`logs_${message.guild.id}`)
message.channel.send(`${client.config.PatrolSuccess} Set the log channel to <#${mchannel}>`)
}

exports.help = {
  name: 'setlog',
  category: 'Moderation',
  description: 'Set log channel.',
  usage: 'g!setlog [channel]'
};