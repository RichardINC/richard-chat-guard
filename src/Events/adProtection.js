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
  if(clientdb.get("ads") === false) return;


    const kelime = ["discord.app", "discord.gg","discordapp","discordgg", ".com", ".gg/", "dc.gg", "gg/", "invite/", "/invite", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", ".cf", ".me", ".in"];
    if(kelime.some(a => message.content.includes(a))){
    let miktar = clientdb.get(`reklam_${message.author.id}`);
    if(miktar >= clientdb.get("warnlimit")) {
        clientdb.del(`reklam_${message.author.id}`)
let time = clientdb.get("punishtime");
let type = clientdb.get("punishtype");

if(type == "jail") {
let punishperm = message.guild.roles.cache.get(clientdb.get("punishrole"));
let roless = message.member.roles.cache.filter(r => r.name !== "@everyone" && r.id !== conf.booster).map(r => r.id);
await message.member.roles.remove(roless);
await message.member.roles.add(punishperm);
await message.channel.send(`${message.member} adres bağlantısı paylaşmak yasak olmasına rağmen **5** kere bağlantı paylaştığı için **${time.replace("m", " Dakika").replace("h", " Saat").replace("d", " Gün")}** cezalıya atıldı!`).then(x => x.delete({timeout: 10000}));
setTimeout(async() => {
await message.member.roles.remove(punishperm);
await message.member.roles.add(roless);
}, ms(time))
}
if(type == "mute") {
  let punishperm = message.guild.roles.cache.get(clientdb.get("punishrole"));
  await message.member.roles.add(punishperm);
  await message.channel.send(`${message.member} adres bağlantısı paylaşmak yasak olmasına rağmen **5** kere bağlantı paylaştığı için **${time.replace("m", " Dakika").replace("h", " Saat").replace("d", " Gün")}** susturuldu!`).then(x => x.delete({timeout: 10000}));
  setTimeout(async() => {
  await message.member.roles.remove(punishperm)
  }, ms(time)) 
}

}
    message.delete().then(async() => {
      await clientdb.s.add(`reklam_${message.author.id}`, +1)
      await message.channel.send(`${message.member} adres bağlantısı paylaşmak yasaktır!`).then(x => x.delete({timeout: 10000}));
  })
}
}; 

module.exports.config = {
    name: "message"
  }