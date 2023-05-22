const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('ban an user')
        .addUserOption(option => option.setName("user").setDescription("user to add the ban").setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('reason of the ban.').setRequired(true)),

 async execute(interaction) { 
    const user = interaction.options.getUser("user")
    const reason = interaction.options.getString("reason")
    const log = await interaction.guild.channels.fetch('1106889786859470863')



        if  (!PermissionsBitField.Flags.BanMembers) 
         return interaction.reply({ content: "You don't have the perms!", ephemeral: true }) 

         interaction.guild.members.ban(user, {reason});
         

         
         var embed = new EmbedBuilder()
         .setTitle("Utente Bannato!")
         .setThumbnail(user.displayAvatarURL())
         .addFields(
           { name: 'User', value: user.toString() },
           { name: 'Reason', value: reason}
         )
         interaction.reply({ embeds: [embed] })

            const ban = new EmbedBuilder()
            .setTitle('new ban!')
            .addFields(
                { name: 'Autore', value: interaction.member.toString() },
                { name: 'Membro bannato', value:  user.toString() },
                { name: 'Motivo', value: reason}
              )
            log.send({embeds: [ban]})
            
         }
     }