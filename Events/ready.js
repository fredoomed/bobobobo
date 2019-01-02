module.exports = (client) => {
    client.user.setActivity(`g!help | Shard ${client.shard.id}`, { type: "LISTENING"})
}