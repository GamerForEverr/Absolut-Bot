const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function() {
    console.log('absolut bot');
	
	bot.user.setGame('Watch me stream!', 'https://twitch.tv/GamerForEverLive');
});

bot.on('message', (message) => {

    if(message.content == "%soviet anthem") {
        message.channel.send("https://www.youtube.com/watch?v=U06jlgpMtQs");
    }
    if(message.content == "%quinn") {
        message.channel.send("Shoe polish.");
    }
    if(message.content == "%daniel") {
        message.channel.send("Is Russian.");
    }    
    if(message.content == "%mexxn") {
        message.channel.send("I'm so <:angery:427829562366492672>");
    }
    if(message.content == "%windows 10") {
        message.channel.send("Download the patch for Windows 10 here! https://github.com/CookiePLMonster/SilentPatchBully/releases");
    }
    if(message.content == "no u") {
        message.channel.send("no fug u");
    }
    if(message.content == "Hehe c:") {
        message.channel.send("c:");
    }
    if(message.content == "kill me pls") {
        message.channel.send("no me");
    }   
    if(message.content == "Should I?") {
    message.channel.send("no");
    }
    if(message.content == "%swegta") {
    message.channel.send("Is in fact, a cuck.");
    } 
    if(message.content == "%bully mp") {
    message.channel.send("Download Bully Multiplayer mod here! https://bully-mp.com");
    }     
    if(message.content == "%ahmad") {
    message.channel.send("Allahu Akbar! \:bomb:");
    }           
    if(message.content == "hOi people c:") {
        message.channel.send("Hewwo c:");
    }          
    if(message.content == "%ze voidah") {
        message.channel.send("dab xlol \:joy: \:ok_hand:");
    }          
    if(message.content == "%piraniata") {
        message.channel.send("babi im vasted");
    }
});    

bot.login(process.env.BOT_TOKEN);
