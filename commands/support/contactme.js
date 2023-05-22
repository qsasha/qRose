const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('contact-us')
    .setDescription('contact us'),
    async execute (interaction) {
        await interaction.reply({ content: '> **CONTACT US : ** qsasha#9551 \n > **REQUEST TO ADD NEW COMMAND :** work in progress...', ephemeral: true})
    }
}