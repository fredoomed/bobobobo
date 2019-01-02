module.exports = async (client, error) => {
    const hook = new Discord.WebhookClient('525831802477346836', 'CxFd0Ht4XHOlcvYgNKbz0EGG6UWZCl9_hhldrEpk2PkquI-QKPhyP6JoPLtUiy2uWs7S');
    console.warn('An unknown error has occured, please read the following log message.');
    hook.send(`${client.config.PatrolError} Something went wrong: **${JSON.stringify(error)}**`, 'error');
  };