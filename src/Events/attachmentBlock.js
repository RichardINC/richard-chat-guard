const Discord = require("discord.js");
module.exports = async(message) => {
  
  if(!clientdb.get("punishtime")) return;
  if(!clientdb.get("punishtype")) return;
  if(!clientdb.get("punishtime")) return;
  if(!clientdb.get("punishrole")) return;
  if(!clientdb.get("chat")) return;
  if(!clientdb.get("punishchannel")) return;
  if(!clientdb.get("capslimit")) return;
  if(!clientdb.get("spamlimit")) return;
  if(!clientdb.get("warnlimit")) return;
  if(!clientdb.get("mentionlimit")) return;
  if(message.author.id == conf.owner) return;
  if(message.guild.members.cache.get(message.author.id).hasPermission('ADMINISTRATOR')) return;
  if(!message.guild.id) return;
  if(!message.guild.id == conf.server) return;
  if(message.author.bot) return;
  if(clientdb.get("dosya") === false) return;

  if(message.attachments.size >= 1){
    if(message.channel.id == clientdb.get("chat")){
     if(message.member.premiumSinceTimestamp == 0){
        message.delete();   
        await message.channel.send(`${message.member} sohbet kanalına dosya aktarımı yasaktır!`).then(x => x.delete({timeout: 10000}));
     }
    }
   }}; 

module.exports.config = {
    name: "message"
  }