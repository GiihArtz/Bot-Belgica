const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "painel_farm",
  description: "Envie o painel de farm",
  default_member_permissions: PermissionFlagsBits.Administrator,
  run: async(client, interaction) => {
    
    const embed = new EmbedBuilder()
    .setTitle(`Central de ajuda ${client.user.username}`)
    .setDescription(`Ainda não criou sua pasta de farm? basta clicar no botão abaixo para criar sua pasta de farm.`)
    .setFooter({ text: client.user.username })
    .setColor("#2b2d31")
    
    const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
       .setCustomId('criarPastaFarm')
       .setLabel('Criar pasta de farm')
       .setStyle(1)
    )
    
    await interaction.channel.send({
      embeds: [embed],
      components: [row]
    })
    
    await interaction.reply({ content: `Painel enviado no chat atual.`, ephemeral: true })
    
  }
}
