const {Discord,Client,MessageEmbed,Collection} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
require('discord-buttons')(client);
require('discord-reply');

///////////////// GLOBALS /////////////////
const conf = global.conf = require("./src/Configs/Config.json");
client.login(conf.token).catch(err => err.console.log("token hatalı knk"))
const Veritabani = require("fresh.db");
let clientdb = global.clientdb = new Veritabani({name:"clientdb", prettySave: true, folderPath:__dirname + "/src/Models"});
//////////////// GLOBALS /////////////////
//// COMMAND HANDLER ////
const fs = require("fs");
const commands = new Map();
global.commands = commands;
const aliases = new Map();
global.aliases = aliases;
//// COMMAND HANDLER ////

client.on("message", (message) => {
    if (message.author.bot ||!message.content.startsWith(conf.prefix) || !message.channel || message.channel.type == "dm") return;
    let args = message.content
        .substring(conf.prefix.length)
        .split(" ");
    let command = args[0];
    let bot = message.client;
    args = args.splice(1);
    let calistirici;
    if (commands.has(command)) {
      calistirici = commands.get(command);
      calistirici.execute(bot, message, args);
    } else if (aliases.has(command)) {
      calistirici = aliases.get(command);
      calistirici.execute(bot, message, args);
    }
  })
      /////////////////// HANDLER ///////////////////
  fs.readdir("./src/Commands", (err, files) => {
    if(err) return console.error(err);
      files = files.filter(file => file.endsWith(".js"));
      console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
      files.forEach(file => {
  let prop = require(`./src/Commands/${file}`);
    if(!prop.config) return;
    if(typeof prop.onLoad === "function") prop.onLoad(client);
      commands.set(prop.config.name, prop);
    if(prop.config.aliases) prop.config.aliases.forEach(aliase => aliases.set(aliase, prop));
    });
  });
      ///////////////////
  fs.readdir("./src/Events", (err, files) => {
    if(err) return console.error(err);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
      files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/Events/${file}`);
    if(!prop.config) return;
        client.on(prop.config.name, prop);
        });
      });
  /////////////////// HANDLER ///////////////////