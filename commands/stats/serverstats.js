const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverstats')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {


		const embed = new EmbedBuilder()
		.setThumbnail(guild.displayAvatarURL())
		.setColor('Blurple')
		.setTitle('Server Stats')
		.setDescription('Show server infos')
		.addFields('**Name :**', interaction.guild.name)
		.addFields('**Members :**', interaction.guild.memberCount)

		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply({embeds: [embed]})
	},
};
