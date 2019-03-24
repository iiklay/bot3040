 client.on("message", message => {
    var prefix = "-";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });


const Discord = require('discord.js');

const Util = require('discord.js');
    client = new Discord.Client({sisableEveryone: true})
 const devs = ['525375324863594496'];
const adminprefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'play')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**  ${argresult} اتغيرت حالتك الى :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**  ${argresult} اتغيرت حالتك الى :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**  ${argresult} اتغيرت حالتك الى :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'set')) {
    client.user.setGame(argresult, "https://www.twitch.tv/raid__1");
      message.channel.sendMessage(`**  ${argresult} اتغيرت حالتك الى :white_check_mark:**`)
  }
  });
client.on('message',async message => {
    if(message.content.startsWith("-restart")) {
        if(message.author.id !==("525375324863594496") return message.reply('You arent the bot owner.');
        message.channel.send('zZz').then(msg => {
            setTimeout(() => {
               msg.edit('zZzZz');
            },1000);
            setTimeout(() => {
               msg.edit('zZzZzZz');
            },2000);
        });
        console.log('Your Bot Has Restarted.');
        console.log(zZzZz);
        setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
        },3000);
    }
});




 client.login(process.env.BOT_TOKEN);
