const Discord = require("discord.js");

module.exports = async () => {
    client.user.setActivity("Developed By Richard")
    if(!clientdb.get("word")) return clientdb.set("word", false);
    if(!clientdb.get("caps")) return clientdb.set("caps", false);
    if(!clientdb.get("spoti")) return clientdb.set("spoti", false);
    if(!clientdb.get("dosya")) return clientdb.set("dosya", false);
    if(!clientdb.get("ads")) return clientdb.set("ads", false);
    if(!clientdb.get("edit")) return clientdb.set("edit", false);
    if(!clientdb.get("mention")) return clientdb.set("mention", false);
    if(!clientdb.get("spam")) return clientdb.set("spam", false);
   }; 

   module.exports.config = {
       name: "ready"
     }