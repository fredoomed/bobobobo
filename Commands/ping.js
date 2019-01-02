exports.run = async (client, message, args, id) => {
        const then = Date.now();
        const newmsg = await message.channel.send('Pong..');
        const diff = Date.now() - then;
        await newmsg.edit(`Pong! \`${diff}ms\``);
    };

    exports.help = {
        name: 'ping',
        category: '',
        description: 'Displays bots\'s response time!',
        usage: 'd!ping'
      };