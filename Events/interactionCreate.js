const Discord = require('discord.js');

module.exports = async (client, message, interaction) => {
    if (interaction.type === Discord.InteractionType.ApplicationCommand) {
        try { // on essaye de charger la commande
            let command = require(`../Commandes/${interaction.commandName}`) // command est la commande chargée
            command.run(client, interaction, interaction.options) // on exécute la commande
        } catch (err) { // si la commande n'est pas trouvée
            message.reply("Pas de commande renseignée ! / Commande inconnue !") // on envoie un message d'erreur
        }
    }
}