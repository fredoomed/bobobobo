exports.run = async (client, message, args, level) => {
  const success = client.emojis.get('521145115532591105')
  const error = client.emojis.get('521145157475631126')
  if(message.author.id !== '432702644725743617') return message.reply(`**${client.config.PatrolError} You do not have permissions to run this command.**`)

    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }

    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      message.react('521145115532591105')
      message.channel.send(clean(evaled), {code:"js"});
    } catch (err) {
        message.react('521145157475631126')
      message.channel.send(`${error} Error:\`\`\`js\n${clean(err)}\n\`\`\``);
    }
}