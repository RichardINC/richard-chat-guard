const Discord = require("discord.js");
const ms = require("ms")
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
module.exports = async (message) => {
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
  if(clientdb.get("caps") === false) return;
let matched = message.content.replace(/[^A-Z]/g, "").length;
let yuzde = percentage(matched, message.content.length)
if (Math.round(yuzde) > clientdb.get("capslimit")) {
  if(message.guild.members.cache.get(message.author.id).hasPermission('ADMINISTRATOR')) return;
let miktar = clientdb.del(`caps_${message.author.id}`);
if(miktar >= clientdb.get("warnlimit")) {
    clientdb.del(`caps_${message.author.id}`)
let time = clientdb.get("punishtime");
let type = clientdb.get("punishtype");

if(type == "jail") {
let punishperm = message.guild.roles.cache.get(clientdb.get("punishrole"));
let roless = message.member.roles.cache.filter(r => r.name !== "@everyone" && r.id !== conf.booster).map(r => r.id);
await message.member.roles.remove(roless);
await message.member.roles.add(punishperm);
await message.channel.send(`${message.member} gereksiz caps kullanımı yasak olmasına rağmen **${clientdb.get("warnlimit")}** kere kullandığı için **${time.replace("m", " Dakika").replace("h", " Saat").replace("d", " Gün")}** cezalıya atıldı!`).then(x => x.delete({timeout: 10000}));
setTimeout(async() => {
await message.member.roles.remove(punishperm);
await message.member.roles.add(roless);
}, ms(time))
}
if(type == "mute") {
  let punishperm = message.guild.roles.cache.get(clientdb.get("punishrole"));
  await message.member.roles.add(punishperm);
  await message.channel.send(`${message.member} gereksiz caps kullanımı yasak olmasına rağmen **${clientdb.get("warnlimit")}** kere kullandığı için **${time.replace("m", " Dakika").replace("h", " Saat").replace("d", " Gün")}** susturuldu!`).then(x => x.delete({timeout: 10000}));
  setTimeout(async() => {
  await message.member.roles.remove(punishperm)
  }, ms(time)) 
}



}
message.delete().then(async() => {
  await clientdb.s.add(`caps_${message.author.id}`, 1)
  await message.channel.send(`${message.member} Gereksiz caps kullanımı yasaktır!`).then(x => x.delete({timeout: 10000}));
})
}
}; 
  module.exports.config = {
      name: "message"
    }

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
} 