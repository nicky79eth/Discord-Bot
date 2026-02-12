const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

loadCommands(client);
loadEvents(client);

client.login(process.env.BOT_TOKEN);
