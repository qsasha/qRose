const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
 module.exports = {
    data: new SlashCommandBuilder()
      .setName('pex')
      .setDescription('Pexa un utente')
      .addUserOption(option =>
        option.setName('utente').setDescription('Specifica un utente da pexare').setRequired(true))

      .addRoleOption(option =>
         option.setName('ruolo').setDescription('Specifica il ruolo successivo').setRequired(true))
      .addStringOption(option =>
         option.setName('motivo').setDescription('Specifica il motivo del pex').setRequired(true))
       .addChannelOption(option =>
         option.setName('canale').setDescription('Specifica il canale dove inviare il messaggio').setRequired(true)),

async execute(interaction) {
if (!interaction.member.permissions.has('MANAGE_MESSAGES')) {
        return interaction.reply('Non puoi eseguire questo comando perchè non hai il permesso!');
      }
    let utentee = interaction.options.getUser('utente');
    let role = interaction.options.getRole('ruolo');
    let canaleo = interaction.options.getChannel('canale');
    let reason = interaction.options.getString('motivo');
    let member = interaction.guild.members.cache.get(utentee.id);

     member.roles.add(role.id);

    let embed = new EmbedBuilder()
        .setTitle('Nuovo pex!')
        .setThumbnail(utentee.displayAvatarURL())
        .setDescription(`**Utente: ${utentee}\nPexato a: ${role}\nMotivo: ${reason}**`)
        .setColor('Blue')
        .setFooter({ text: `Eseguito da ${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL()}` });
      let msgEmbed = await canaleo.send({ embeds: [embed]});

        let embedmsg = new EmbedBuilder() 

        .setTitle('Pex Riuscito') 
        .setDescription('Il messaggio del pex è stato inviato correttamente!')
        .setColor('#344ceb');

        interaction.reply({ embeds: [embedmsg]});
      }
    };