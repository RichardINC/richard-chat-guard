const Discord = require("discord.js");

module.exports = async (message) => {
  
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

   }; 

   module.exports.config = {
       name: "message"
     }