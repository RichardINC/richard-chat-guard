const Discord = require("discord.js");
const { MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');

  module.exports.config = {
  name: "setup",
  aliases: ["ayarlar", "ayar"]
  };

module.exports.execute = async(client, message, args) => {
  try {
    if(message.author.id !== conf.owner) return;
    if(message.guild.id !== conf.server) return;
    let Button1 = new MessageButton()
    .setStyle("green") 
    .setLabel('Sistem Bilgilendirmesi')
    .setID('system'); 
    let Button2 = new MessageButton()
    .setStyle("red") 
    .setLabel('Sistem Ayarlarını Listele')
    .setID('settings'); 
  
    let option_1 = new MessageMenuOption()
    .setLabel("Ceza Süresi")
    .setValue("punishtime")
    .setDescription("Ceza süresini değiştirmek için tıkla")
    let option_2 = new MessageMenuOption()
    .setLabel("Ceza Türü")
    .setValue("punishtype")
    .setDescription("Ceza türünü değiştirmek için tıkla")
    let option_3 = new MessageMenuOption()
    .setLabel("Ceza Log Kanalı")
    .setValue("punislog")
    .setDescription("Ceza log kanalını değiştirmek için tıkla")
    let option_4 = new MessageMenuOption()
    .setLabel("Ceza Rolü")
    .setValue("punishrole")
    .setDescription("Ceza rolünü değiştirmek için tıkla")
    let option_5 = new MessageMenuOption()
    .setLabel("Chat Kanalı")
    .setValue("punishchat")
    .setDescription("Chat kanalını değiştirmek için tıkla")
    let option_6 = new MessageMenuOption()
    .setLabel("Ceza Sınırları")
    .setValue("punishlimit")
    .setDescription("Ceza sınırlarını değiştirmek için tıkla")
    let option_7 = new MessageMenuOption()
    .setLabel("Koruma Ayarları")
    .setValue("protect")
    .setDescription("Korumaları açmak veya kapatmak için tıkla")

    let selection = new MessageMenu()
    .setID("selector")
    .setPlaceholder("Düzenlemek istediğin seçenek için tıkla")
    .addOption(option_1)
    .addOption(option_2)
    .addOption(option_3)
    .addOption(option_4)
    .addOption(option_5)
    .addOption(option_6)
    .addOption(option_7);

    const row1 = new MessageActionRow().addComponents(Button1, Button2)
    const row2 = new MessageActionRow().addComponents(selection)
  
    let embed = new Discord.MessageEmbed().setFooter("RICHARD ILE BOT VAKTI :)").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }));
 
  const MenuMessage = await message.channel.send({embed: embed.setDescription(`Aşağıdaki butonlardan veya menüden yapmak istediğin işlemi seçebilirsin.`), components: [row1, row2]});
  
  const filter = (menu) => menu.clicker.user.id === message.author.id;
  const Collector = MenuMessage.createMenuCollector(filter, { time: 150000 });

  const filter2 = (button) => button.clicker.user.id === message.author.id;
  const Collector2 = MenuMessage.createButtonCollector(filter2, { time: 150000 });
  
  
  Collector.on("collect", async (menu) => {
    menu.reply.defer();
    MenuMessage.delete();

    if (menu.values[0] === "punishtime") {

      message.channel.send({embed: embed.setDescription(`Ceza süresini değiştirmek için geçerli bir süre girmelisin.
\`\`\`fix
Örn: 30m | 1h | 1d\`\`\``)})
            .then(async (mesaj) => {
                let answers = await message.channel.awaitMessages((m) => m.author.id == message.author.id, { max: 1, time: 10000 });
                if (answers.size === null) return mesaj.delete(10000);
                let tepki = answers.first();
                if (!["m","h","d"].some(arg => tepki.content.includes(arg))) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Geçerli bir süre girmediğin için iptal edildi.`) });
                if (tepki) {
                    clientdb.set("punishtime", tepki.content)
                    tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:white_check_mark:**]** Ceza süresi başarıyla **${tepki}** olarak ayarlandı!`) });
                }
            });
    }
    if (menu.values[0] === "protect") {

      let Button125 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Küfür Koruması')
      .setID('word'); 
      let Button225 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Caps Koruması')
      .setID('caps'); 
      let Button2255 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Spotify Koruması')
      .setID('spoti'); 
      let Button226 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Dosya Koruması')
      .setID('dosya'); 
      let Button227 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Reklam Koruması')
      .setID('ads'); 
      let Button222 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Mesaj Düzenleme Koruması')
      .setID('edit'); 
      let Button224 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Etiket Koruması')
      .setID('mention'); 
      let Button252 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Spam Koruması')
      .setID('spamss'); 

      const qwevqwevqwe = new MessageActionRow().addComponents(Button125, Button225, Button2255, Button226)
      const qwveqwv = new MessageActionRow().addComponents(Button227, Button222, Button224, Button252)
      const ProtectMessage = await message.channel.send({embed: embed.setDescription(`Koruma sistemi aşağıda listelenmiştir;
            
\`\`\`cs
Küfür Koruması: ${clientdb.get(`word`) ? "✔️" : "❌"} 
Caps Koruması: ${clientdb.get(`caps`) ? "✔️" : "❌"} 
Spotify Koruması: ${clientdb.get(`spoti`) ? "✔️" : "❌"} 
Dosya Koruması: ${clientdb.get(`dosya`) ? "✔️" : "❌"} 
Reklam Koruması: ${clientdb.get(`ads`) ? "✔️" : "❌"} 
Mesaj Düzenleme Koruması: ${clientdb.get(`edit`) ? "✔️" : "❌"} 
Etiket Koruması: ${clientdb.get(`mention`) ? "✔️" : "❌"} 
Spam Koruması: ${clientdb.get(`spam`) ? "✔️" : "❌"} 
\`\`\``), components: [qwevqwevqwe,qwveqwv]})

const filter222222 = (button) => button.clicker.user.id === message.author.id;
const Collector222222 = ProtectMessage.createButtonCollector(filter222222, { time: 150000 });
Collector222222.on("collect", async (button) => {
  button.reply.defer();

  if(button.id == "word") {
    if(clientdb.get(`word`) === true){ clientdb.set(`word`, false) } else { clientdb.set(`word`, true) }

    ProtectMessage.edit({embed: embed.setDescription(`Koruma sistemi aşağıda listelenmiştir;
        
\`\`\`cs
Küfür Koruması: ${clientdb.get(`word`) ? "✔️" : "❌"} 
Caps Koruması: ${clientdb.get(`caps`) ? "✔️" : "❌"} 
Spotify Koruması: ${clientdb.get(`spoti`) ? "✔️" : "❌"} 
Dosya Koruması: ${clientdb.get(`dosya`) ? "✔️" : "❌"} 
Reklam Koruması: ${clientdb.get(`ads`) ? "✔️" : "❌"} 
Mesaj Düzenleme Koruması: ${clientdb.get(`edit`) ? "✔️" : "❌"} 
Etiket Koruması: ${clientdb.get(`mention`) ? "✔️" : "❌"} 
Spam Koruması: ${clientdb.get(`spam`) ? "✔️" : "❌"}      
\`\`\``), components: [qwevqwevqwe, qwveqwv]})
  }
  if(button.id == "caps") {
    if(clientdb.get(`caps`) === true){ clientdb.set(`caps`, false) } else { clientdb.set(`caps`, true) }

    ProtectMessage.edit({embed: embed.setDescription(`Koruma sistemi aşağıda listelenmiştir;
        
\`\`\`cs
Küfür Koruması: ${clientdb.get(`word`) ? "✔️" : "❌"} 
Caps Koruması: ${clientdb.get(`caps`) ? "✔️" : "❌"} 
Spotify Koruması: ${clientdb.get(`spoti`) ? "✔️" : "❌"} 
Dosya Koruması: ${clientdb.get(`dosya`) ? "✔️" : "❌"} 
Reklam Koruması: ${clientdb.get(`ads`) ? "✔️" : "❌"} 
Mesaj Düzenleme Koruması: ${clientdb.get(`edit`) ? "✔️" : "❌"} 
Etiket Koruması: ${clientdb.get(`mention`) ? "✔️" : "❌"} 
Spam Koruması: ${clientdb.get(`spam`) ? "✔️" : "❌"}      
\`\`\``), components: [qwevqwevqwe, qwveqwv]})
  }
  if(button.id == "spoti") {
    if(clientdb.get(`spoti`) === true){ clientdb.set(`spoti`, false) } else { clientdb.set(`spoti`, true) }

    ProtectMessage.edit({embed: embed.setDescription(`Koruma sistemi aşağıda listelenmiştir;
        
\`\`\`cs
Küfür Koruması: ${clientdb.get(`word`) ? "✔️" : "❌"} 
Caps Koruması: ${clientdb.get(`caps`) ? "✔️" : "❌"} 
Spotify Koruması: ${clientdb.get(`spoti`) ? "✔️" : "❌"} 
Dosya Koruması: ${clientdb.get(`dosya`) ? "✔️" : "❌"} 
Reklam Koruması: ${clientdb.get(`ads`) ? "✔️" : "❌"} 
Mesaj Düzenleme Koruması: ${clientdb.get(`edit`) ? "✔️" : "❌"} 
Etiket Koruması: ${clientdb.get(`mention`) ? "✔️" : "❌"} 
Spam Koruması: ${clientdb.get(`spam`) ? "✔️" : "❌"}      
\`\`\``), components: [qwevqwevqwe, qwveqwv]})
  }
  if(button.id == "dosya") {
    if(clientdb.get(`dosya`) === true){ clientdb.set(`dosya`, false) } else { clientdb.set(`dosya`, true) }

    ProtectMessage.edit({embed: embed.setDescription(`Koruma sistemi aşağıda listelenmiştir;
        
\`\`\`cs
Küfür Koruması: ${clientdb.get(`word`) ? "✔️" : "❌"} 
Caps Koruması: ${clientdb.get(`caps`) ? "✔️" : "❌"} 
Spotify Koruması: ${clientdb.get(`spoti`) ? "✔️" : "❌"} 
Dosya Koruması: ${clientdb.get(`dosya`) ? "✔️" : "❌"} 
Reklam Koruması: ${clientdb.get(`ads`) ? "✔️" : "❌"} 
Mesaj Düzenleme Koruması: ${clientdb.get(`edit`) ? "✔️" : "❌"} 
Etiket Koruması: ${clientdb.get(`mention`) ? "✔️" : "❌"} 
Spam Koruması: ${clientdb.get(`spam`) ? "✔️" : "❌"}      
\`\`\``), components: [qwevqwevqwe, qwveqwv]})
  }
  if(button.id == "ads") {
    if(clientdb.get(`ads`) === true){ clientdb.set(`ads`, false) } else { clientdb.set(`ads`, true) }

    ProtectMessage.edit({embed: embed.setDescription(`Koruma sistemi aşağıda listelenmiştir;
        
\`\`\`cs
Küfür Koruması: ${clientdb.get(`word`) ? "✔️" : "❌"} 
Caps Koruması: ${clientdb.get(`caps`) ? "✔️" : "❌"} 
Spotify Koruması: ${clientdb.get(`spoti`) ? "✔️" : "❌"} 
Dosya Koruması: ${clientdb.get(`dosya`) ? "✔️" : "❌"} 
Reklam Koruması: ${clientdb.get(`ads`) ? "✔️" : "❌"} 
Mesaj Düzenleme Koruması: ${clientdb.get(`edit`) ? "✔️" : "❌"} 
Etiket Koruması: ${clientdb.get(`mention`) ? "✔️" : "❌"} 
Spam Koruması: ${clientdb.get(`spam`) ? "✔️" : "❌"}      
\`\`\``), components: [qwevqwevqwe, qwveqwv]})
  }
  if(button.id == "edit") {
    if(clientdb.get(`edit`) === true){ clientdb.set(`edit`, false) } else { clientdb.set(`edit`, true) }

    ProtectMessage.edit({embed: embed.setDescription(`Koruma sistemi aşağıda listelenmiştir;
        
\`\`\`cs
Küfür Koruması: ${clientdb.get(`word`) ? "✔️" : "❌"} 
Caps Koruması: ${clientdb.get(`caps`) ? "✔️" : "❌"} 
Spotify Koruması: ${clientdb.get(`spoti`) ? "✔️" : "❌"} 
Dosya Koruması: ${clientdb.get(`dosya`) ? "✔️" : "❌"} 
Reklam Koruması: ${clientdb.get(`ads`) ? "✔️" : "❌"} 
Mesaj Düzenleme Koruması: ${clientdb.get(`edit`) ? "✔️" : "❌"} 
Etiket Koruması: ${clientdb.get(`mention`) ? "✔️" : "❌"} 
Spam Koruması: ${clientdb.get(`spam`) ? "✔️" : "❌"}      
\`\`\``), components: [qwevqwevqwe, qwveqwv]})
  }
  if(button.id == "mention") {
    if(clientdb.get(`mention`) === true){ clientdb.set(`mention`, false) } else { clientdb.set(`mention`, true) }

    ProtectMessage.edit({embed: embed.setDescription(`Koruma sistemi aşağıda listelenmiştir;
        
\`\`\`cs
Küfür Koruması: ${clientdb.get(`word`) ? "✔️" : "❌"} 
Caps Koruması: ${clientdb.get(`caps`) ? "✔️" : "❌"} 
Spotify Koruması: ${clientdb.get(`spoti`) ? "✔️" : "❌"} 
Dosya Koruması: ${clientdb.get(`dosya`) ? "✔️" : "❌"} 
Reklam Koruması: ${clientdb.get(`ads`) ? "✔️" : "❌"} 
Mesaj Düzenleme Koruması: ${clientdb.get(`edit`) ? "✔️" : "❌"} 
Etiket Koruması: ${clientdb.get(`mention`) ? "✔️" : "❌"} 
Spam Koruması: ${clientdb.get(`spam`) ? "✔️" : "❌"}      
\`\`\``), components: [qwevqwevqwe, qwveqwv]})
  }
  if(button.id == "spamss") {
    if(clientdb.get(`spam`) === true){ clientdb.set(`spam`, false) } else { clientdb.set(`spam`, true) }

    ProtectMessage.edit({embed: embed.setDescription(`Koruma sistemi aşağıda listelenmiştir;
        
\`\`\`cs
Küfür Koruması: ${clientdb.get(`word`) ? "✔️" : "❌"} 
Caps Koruması: ${clientdb.get(`caps`) ? "✔️" : "❌"} 
Spotify Koruması: ${clientdb.get(`spoti`) ? "✔️" : "❌"} 
Dosya Koruması: ${clientdb.get(`dosya`) ? "✔️" : "❌"} 
Reklam Koruması: ${clientdb.get(`ads`) ? "✔️" : "❌"} 
Mesaj Düzenleme Koruması: ${clientdb.get(`edit`) ? "✔️" : "❌"} 
Etiket Koruması: ${clientdb.get(`mention`) ? "✔️" : "❌"} 
Spam Koruması: ${clientdb.get(`spam`) ? "✔️" : "❌"}      
\`\`\``), components: [qwevqwevqwe, qwveqwv]})
  }
    })
    }
    if (menu.values[0] === "punishtype") {

      let Button12 = new MessageButton()
      .setStyle("green") 
      .setLabel('Cezalı')
      .setID('jail'); 
      let Button22 = new MessageButton()
      .setStyle("green") 
      .setLabel('Susturma')
      .setID('mute'); 

      const TypeMessage = await message.channel.send({embed: embed.setDescription(`Ceza türünü değiştirmek için butonlardan birisini seçmelisin.

**Bilgilendirme**

__Cezalı:__ Kullanıcıyı belirlenen süre boyunca bütün rollerini alıp cezalıya atar, cezası bitince bütün rollerini geri verir.
__Susturma:__ Kullanıcıyı belirlenen süre boyunca bütün susturulur, cezası bitince susturması kaldırılır.`), buttons: [Button12, Button22]})

const filter22 = (button) => button.clicker.user.id === message.author.id;
const Collector22 = TypeMessage.createButtonCollector(filter22, { time: 150000 });
Collector22.on("collect", async (button) => {
  button.reply.defer();
  TypeMessage.delete();

  if(button.id == "jail") {
    clientdb.set("punishtype", "jail")
    message.channel.send({embed: embed.setDescription(`**[**:white_check_mark:**]** Ceza türü başarıyla **Cezalı** olarak değiştirildi!`)})
  }

  if(button.id == "mute") {
    clientdb.set("punishtype", "mute")
    message.channel.send({embed: embed.setDescription(`**[**:white_check_mark:**]** Ceza türü başarıyla **Susturma** olarak değiştirildi!`)})
  }
    })
    }
    if (menu.values[0] === "punislog") {

      message.channel.send({embed: embed.setDescription(`Ceza log kanalını değiştirmek için geçerli kanal etiketlemelisin.`)})
            .then(async (mesaj) => {
                let answers = await message.channel.awaitMessages((m) => m.author.id == message.author.id, { max: 1, time: 10000 });
                if (answers.size === null) return mesaj.delete(10000);
                let tepki = answers.first();
                const channel = tepki.mentions.channels.first();
                if (!channel) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Belirtilen kanal bulunamadı ve işlem iptal edildi.`) });
                if (tepki) {
                    clientdb.set("punishchannel", channel.id)
                    tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:white_check_mark:**]** Ceza log kanalı başarıyla **${channel}** olarak ayarlandı!`) });
                }
            });
    }
    if (menu.values[0] === "punishrole") {

      message.channel.send({embed: embed.setDescription(`Ceza rolünü değiştirmek için geçerli rol etiketlemelisin.`)})
            .then(async (mesaj) => {
                let answers = await message.channel.awaitMessages((m) => m.author.id == message.author.id, { max: 1, time: 10000 });
                if (answers.size === null) return mesaj.delete(10000);
                let tepki = answers.first();
                const role = tepki.mentions.roles.first();
                if (!role) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Belirtilen rol bulunamadı ve işlem iptal edildi.`) });
                if (tepki) {
                    clientdb.set("punishrole", role.id)
                    tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:white_check_mark:**]** Ceza rolü başarıyla **${role}** olarak ayarlandı!`) });
                }
            });
    }
    if (menu.values[0] === "punishchat") {

      message.channel.send({embed: embed.setDescription(`Chat kanalını değiştirmek için geçerli kanal etiketlemelisin.`)})
            .then(async (mesaj) => {
                let answers = await message.channel.awaitMessages((m) => m.author.id == message.author.id, { max: 1, time: 10000 });
                if (answers.size === null) return mesaj.delete(10000);
                let tepki = answers.first();
                const channel = tepki.mentions.channels.first();
                if (!channel) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Belirtilen kanal bulunamadı ve işlem iptal edildi.`) });
                if (tepki) {
                    clientdb.set("chat", channel.id)
                    tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:white_check_mark:**]** Chat kanalı başarıyla **${channel}** olarak ayarlandı!`) });
                }
            });
    }
    if (menu.values[0] === "punishlimit") {

      let Button122 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Caps Limiti')
      .setID('capslimit'); 
      let Button222 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Spam Limiti')
      .setID('spamlimit'); 
      let Button223 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Uyarı Limiti')
      .setID('warnlimit'); 
      let Button224 = new MessageButton()
      .setStyle("gray") 
      .setLabel('Etiket Limiti')
      .setID('mentionlimit'); 

      const LimitMessage = await message.channel.send({embed: embed.setDescription(`aşağıdaki butonlardan düzenlemek istediğin sınırı seçmelisin.`), buttons: [Button122, Button222, Button223, Button224]})

const filter223 = (button) => button.clicker.user.id === message.author.id;
const Collector223 = LimitMessage.createButtonCollector(filter223, { time: 150000 });
Collector223.on("collect", async (button) => {
  button.reply.defer();
  LimitMessage.delete();

  if (button.id == "capslimit") {

    message.channel.send({embed: embed.setDescription(`Caps Yüzdesini değiştirmek için geçerli limit girmelisin.

**NOT:** En fazla %90* yapabilirsiniz.
\`\`\`fix
Örn: 10 | 20 | 50\`\`\``)})
          .then(async (mesaj) => {
              let answers = await message.channel.awaitMessages((m) => m.author.id == message.author.id, { max: 1, time: 10000 });
              if (answers.size === null) return mesaj.delete(10000);
              let tepki = answers.first();
              if(!Number(tepki.content)) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Geçerli bir yüzde girilmediği için işlem iptal edildi.`) });
              if(tepki.content > 90) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Geçerli bir yüzde girilmediği için işlem iptal edildi.`) });
              if (tepki) {
                  clientdb.set("capslimit", tepki.content)
                  tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:white_check_mark:**]** Caps Yüzdesi başarıyla **%${tepki.content}** olarak ayarlandı!`) });
              }
          });
  }
    if (button.id == "spamlimit") {
  
      message.channel.send({embed: embed.setDescription(`Spam Limitini değiştirmek için geçerli limit girmelisin.
  
**NOT:** En fazla 5 yapabilirsiniz.`)})
            .then(async (mesaj) => {
                let answers = await message.channel.awaitMessages((m) => m.author.id == message.author.id, { max: 1, time: 10000 });
                if (answers.size === null) return mesaj.delete(10000);
                let tepki = answers.first();
                if(!Number(tepki.content)) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Geçerli bir limit girilmediği için işlem iptal edildi.`) });
                if(tepki.content > 5) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Geçerli bir limit girilmediği için işlem iptal edildi.`) });
                if (tepki) {
                    clientdb.set("spamlimit", tepki.content)
                    tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:white_check_mark:**]** Spam Limitini başarıyla **%${tepki.content}** olarak ayarlandı!`) });
                }
            });
    }
    if (button.id == "warnlimit") {
  
      message.channel.send({embed: embed.setDescription(`Uyarı Limitini değiştirmek için geçerli limit girmelisin.
  
**NOT:** En fazla 10 yapabilirsiniz.`)})
            .then(async (mesaj) => {
                let answers = await message.channel.awaitMessages((m) => m.author.id == message.author.id, { max: 1, time: 10000 });
                if (answers.size === null) return mesaj.delete(10000);
                let tepki = answers.first();
                if(!Number(tepki.content)) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Geçerli bir limit girilmediği için işlem iptal edildi.`) });
                if(tepki.content > 10) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Geçerli bir limit girilmediği için işlem iptal edildi.`) });
                if (tepki) {
                    clientdb.set("warnlimit", tepki.content)
                    tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:white_check_mark:**]** Uyarı Limitini başarıyla **%${tepki.content}** olarak ayarlandı!`) });
                }
            });
    }
    if (button.id == "mentionlimit") {
  
      message.channel.send({embed: embed.setDescription(`Etiket Limitini değiştirmek için geçerli limit girmelisin.
  
**NOT:** En fazla 5 yapabilirsiniz.`)})
            .then(async (mesaj) => {
                let answers = await message.channel.awaitMessages((m) => m.author.id == message.author.id, { max: 1, time: 10000 });
                if (answers.size === null) return mesaj.delete(10000);
                let tepki = answers.first();
                if(!Number(tepki.content)) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Geçerli bir limit girilmediği için işlem iptal edildi.`) });
                if(tepki.content > 5) return tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:x:**]** Geçerli bir limit girilmediği için işlem iptal edildi.`) });
                if (tepki) {
                    clientdb.set("mentionlimit", tepki.content)
                    tepki.lineReplyNoMention({ embed: embed.setDescription(`**[**:white_check_mark:**]** Etiket Limitini başarıyla **%${tepki.content}** olarak ayarlandı!`) });
                }
            });
    }
      })
    }
  })
  Collector2.on("collect", async (button) => {
    button.reply.defer();
    MenuMessage.delete();

    if(button.id == "system") {
      let chat2 = clientdb.get("chat");
      let chat;
      if(chat2) chat = `<#${chat2}>`
      if(!chat2) chat = "Chat (Ayarlanmadı)"
      message.channel.send({embed: embed.setDescription(`**Chat Guard Sistemi Bilgilendirmesi**
                
Chat Guard sistemi detaylı bir sistemdir, normal koruma sistemlerinin aksine tek komut vardır ve tam otomatik çalışır.`)
.addField("Küfür Koruması", `Mesaj içerisinde küfür var ise, mesajı siler ve arkasından kullanıcı uyarılır. Eğer ki uyarı sayısı **${clientdb.get("warnlimit") || `0`}** olursa doğrudan ceza verilir.`, true)
.addField("Caps Koruması", `Mesaj içerisinde **%${clientdb.get("capslimit") || `0`}**'dan fazla büyük harf kullanımı var ise, mesajı siler ve arkasından kullanıcı uyarılır. Eğer ki uyarı sayısı **${clientdb.get("warnlimit") || `0`}** olursa doğrudan ceza verilir.`, true)
.addField("Spotify Koruması", chat+` Kanalına Spotify daveti atılırsa, daveti siler ve arkasından kullanıcı uyarılır, eğer ki uyarı sayısı **${clientdb.get("warnlimit") || `0`}** olursa doğrudan ceza verilir.`, true)
.addField("Dosya Koruması", chat+` Kanalına dosya atılırsa, dosya silinir ve arkasından kullanıcı uyarılır, eğer ki uyarı sayısı **${clientdb.get("warnlimit") || `0`}** olursa doğrudan ceza verilir.`, true)
.addField("Reklam Koruması", `Mesaj içerisinde herhangi bir adres bağlantısı var ise, bağlantı silinir ve arkasından kullanıcı uyarılır, eğer ki uyarı sayısı **${clientdb.get("warnlimit") || `0`}** olursa doğrudan ceza verilir.`, true)
.addField("Mesaj Düzenleme Koruması", `Düzenlenen mesaj içerisinde küfür, bağlantı, aşırı caps veya fazla etiket var ise mesaj silinir ve arkasından kullanıcı uyarılır, ardından ceza verilir.`, true)
.addField("Etiket Koruması", `Mesaj içerisindeki etiket sayısı **${clientdb.get("mentionlimit") || `0`}** ve üstü olur ise mesaj silinir ve arkasından kullanıcı uyarılır, eğer ki uyarı sayısı **${clientdb.get("warnlimit") || `0`}** olursa doğrudan ceza verilir.`, true)
.addField("Spam Koruması", `Arka arkaya **${clientdb.get("spamlimit") || `0`}** mesaj yazılır ise mesajlar silinir ve arkasından kullanıcı uyarılır, eğer ki uyarı sayısı **${clientdb.get("warnlimit") || `0`}** olursa doğrudan ceza verilir.`, true)})
    }
    if(button.id == "settings") {
      let cezaroles = clientdb.get("punishrole");
      let cezarole;
      if(cezaroles) cezarole = `${message.guild.roles.cache.get(cezaroles).name} - (${message.guild.roles.cache.get(cezaroles).id})`;
      if(!cezaroles) cezarole = "Ayarlanmadı";
      let cezakanali = clientdb.get("punishchannel");
      let cezakanal;
      if(cezakanali) cezakanal = `${message.guild.channels.cache.get(cezakanali).name} - (${message.guild.channels.cache.get(cezakanali).id})`;
      if(!cezakanali) cezakanal = "Ayarlanmadı";
      let chatkanali = clientdb.get("chat");
      let chat;
      if(chatkanali) chat = `${message.guild.channels.cache.get(chatkanali).name} - (${message.guild.channels.cache.get(chatkanali).id})`;
      if(!chatkanali) chat = "Ayarlanmadı";
      message.channel.send({embed: embed.setDescription(`**Chat Guard Ayar Listesi**


\`\`\`fix

Ceza Süresi: ${clientdb.get("punishtime") || "Ayarlanmadı"}
Ceza Türü: ${clientdb.get("punishtype") || "Ayarlanmadı"}
Ceza Log Kanalı: ${cezakanal}
Ceza Rolü: ${cezarole}
Chat Kanalı: ${chat}
Caps Limit: ${clientdb.get("capslimit") || "Ayarlanmadı"}
Spam Limit: ${clientdb.get("spamlimit") || "Ayarlanmadı"}
Uyarı Limiti: ${clientdb.get("warnlimit") || "Ayarlanmadı"}
Etiket Limiti: ${clientdb.get("mentionlimit") || "Ayarlanmadı"}
\`\`\``)})
    }
  })
  } catch (err) {
  message.channel.send("KOMUTA HATASI!"+`\`\`\`js
`+err+`\`\`\``)
}
};
