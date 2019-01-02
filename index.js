const Discord = require('discord.js');
const config = require('./config.js');
const client = new Discord.Client();
const fs = require('fs');
const Enmap = require('enmap');
client.commands = new Discord.Collection();
client.config = config;


// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir('./Events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
    // If the file is not a JS file, ignore it (thanks, Apple)
        if (!file.endsWith('.js')) return;
        // Load the event file itself
        const event = require(`./Events/${file}`);
        // Get just the event name from the file name
        let eventName = file.split('.')[0];
        // super-secret recipe to call events with all their proper arguments *after* the `client` var.
        // without going into too many details, this means each event will be called with the client argument,
        // followed by its "normal" arguments, like message, member, etc etc.
        // This line is awesome by the way. Just sayin'.
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./Events/${file}`)];
    });
});

const defaultSettings = {	
    'logs': 'disabled'
}

client.settings = new Enmap({
    name: 'settings', 
    autoFetch: true
  });
  

client.commands = new Enmap();

fs.readdir('./Commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        // Load the command file itself
        let props = require(`./Commands/${file}`);
        // Get just the command name from the file name
        let commandName = file.split('.')[0];
        console.log(`[LOAD]: Loading ${commandName}`);
        // Here we simply store the whole thing in the command Enmap. We're not running it right now.
        client.commands.set(commandName, props);
    });
});


client.blackList = new Enmap({
    name: 'blackList',
    autofetch: true,
    fetchAll:true
  });

client.login(client.config.token);

client.on('message', message => {
    if(message.author.id == '432702644725743617' || message.author.id == '404804195292807170'){
        if (message.content.indexOf('g;') !== 0) return;
        const args = message.content.slice(2).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command);
        if (!cmd) return;

        // Run the command
        cmd.run(client, message, args);
    }
});

client.on('guildCreate', (guild) => {
    console.log('[JOIN]: ' + guild.name + ' - ' + guild.id + client.users.get(guild.ownerID).username + client.users.get(guild.ownerID).discriminator);
});
  
client.on('ready', () => {
    console.log('[READY]: ' + client.user.username + ' is online.');
});
