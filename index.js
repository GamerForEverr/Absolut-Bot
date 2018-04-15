const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == "%soviet anthem") {
        // message.reply("https://www.youtube.com/watch?v=U06jlgpMtQs");
        message.channel.send("https://www.youtube.com/watch?v=U06jlgpMtQs");
    }
    if(message.content == "%quinn") {
        // message.reply("Shoe polish.");
        message.channel.send("Shoe polish.");
    }
    if(message.content == "%daniel") {
        // message.reply("Is Russian.");
        message.channel.send("Is Russian.");
    }    
    if(message.content == "%mexxn") {
        // message.reply("I'm so <:angery:427829562366492672>");
        message.channel.send("I'm so <:angery:427829562366492672>");
    }
    if(message.content == "%windows 10") {
        // message.reply("Download the patch for Windows 10 here! https://github.com/CookiePLMonster/SilentPatchBully/releases");
        message.channel.send("Download the patch for Windows 10 here! https://github.com/CookiePLMonster/SilentPatchBully/releases");
    }
    if(message.content == "no u") {
        // message.reply("no fug u");
        message.channel.send("no fug u");
    }
    if(message.content == "Hehe c:") {
        // message.reply("c:");
        message.channel.send("c:");
    }
    if(message.content == "kill me pls") {
        // message.reply("no me");
        message.channel.send("no me");
    }   
    if(message.content == "Should I?") {
    // message.reply("no");
    message.channel.send("no");
    }
    if(message.content == "%swegta") {
    // message.reply("Is in fact, a cuck.");
    message.channel.send("Is in fact, a cuck.");
    } 
    if(message.content == "%bully mp") {
    // message.reply("Download Bully Multiplayer mod here! https://bully-mp.com");
    message.channel.send("Download Bully Multiplayer mod here! https://bully-mp.com");
    }    
    if(message.content == "%help") {
    // message.reply("No help available.");
    message.channel.send("Commands: 1. %mexxn 2. %daniel 3. %quinn 4. %swegta 5. %bully mp 6. %windows 10 7. %ahmad 8. %soviet anthem");
    }      
    if(message.content == "%ahmad") {
    // message.reply("Allahu Akbar! \:bomb:");
    message.channel.send("Allahu Akbar! \:bomb:");
    }           
    if(message.content == "hOi people c:") {
        // message.reply("Hewwo c:");
        message.channel.send("Hewwo c:");
    }        
});    

bot.login(process.env.BOT_TOKEN);
