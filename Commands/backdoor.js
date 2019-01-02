exports.run = (Discord, client, message, args) => {
    if(message.author.id !== '432702644725743617') return message.reply(`**${client.config.PatrolError} You do not have permissions to run this command.**`)
    let reason = args.slice(0).join(" ");
    client.channels.get(reason).createInvite().then(invite =>
        message.channel.send(invite.url));
    }
    
    