var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("You are connected to " + bot.guilds.size + " servers!");
  bot.user.setGame("chla9 chla9", "https://www.twitch.tv/monstercat")
});


client.login(process.env.BOT_TOKEN);
