const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "ready",
    /**
     * @param {Client} client
     */
    run: async (client) => {
        console.log(`${client.user.tag} is ready!`)
        console.log("Made with ❤️ by Sudry")
        console.log("https://github.com/SudryDevv/Discord-NitroGenerator")
    }
}