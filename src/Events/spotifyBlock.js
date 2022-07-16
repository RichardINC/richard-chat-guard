const Discord = require("discord.js");
module.exports = async(message) => {
    if(!clientdb.get("punishtime")) return;
    if(!clientdb.get("punishtype")) return;
    if(!clientdb.get("punishtime")) return;
    if(!clientdb.get("punishrole")) return;
    if(!clientdb.get("chat")) return;
    if(!clientdb.get("punishchannel")) return;
    if(!clientdb.get("capspercent")) return;
    if(!clientdb.get("spamlimit")) return;
    if(!clientdb.get("warnlimit")) return;
    if(!clientdb.get("mentionlimit")) return;
    if(message.author.id == conf.owner) return;
    if(clientdb.get("spoti") === false) return;
    if(message.channel.id == config.chat){
        if (!message.activity) return;
        if (message.activity.partyID.startsWith("spotify:")) {
        if(message.guild.members.cache.get(message.author.id).hasPermission('ADMINISTRATOR')) return;
            message.delete();   
            await message.channel.send(`${message.member} sohbet kanalına spotify daveti atmak yasaktır!`).then(x => x.delete({timeout: 10000}));
        }
    }
}; 
  module.exports.configuration = {
      name: "message"
    }