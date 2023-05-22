const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

	client.user.setPresence({ 
		activities: [{ name: `/help`,  type: ActivityType.Watching }],
		status: 'dnd',
	});
	},
};

/*${client.guilds.cache.size} servers = tot server member*/