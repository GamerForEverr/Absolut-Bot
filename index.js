const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function() {
    console.log('absolut bot');
	
	bot.user.setGame('Drinking Vodka | %help', 'https://twitch.tv/GamerForEverLive');
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
        message.channel.send("Download the patch for Windows 10 here! \n https://github.com/CookiePLMonster/SilentPatchBully/releases");
    }
    if(message.content == "no u") {
        message.channel.send("no fug u");
    }
    if(message.content == "Hehe c:") {
        message.channel.send("c:");
    }
    if(message.content == "%emulators") {
        message.channel.send("Emulators typically are released by developers who don't do it for the money, they just want to contribute to the gaming community.\n\nEmulators are not available until the end of the life-cycle of the console as the system updates keep the console protected./n/nThis may not be the case with certain consoles like Ps3 or even Xbox 360, however the consoles that belong to the generation older to that has an emulator which are freely available on the internet.");
    }   
    if(message.content == "Should I?") {
    message.channel.send("no");
    }
    if(message.content == "%bully mp") {
    message.channel.send("Download Bully Multiplayer mod here! \n https://bully-mp.com");
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
    if(message.content == "%help") {
        message.channel.send("``All Commands (for now):`` **\n %mexxn \n %daniel \n %quinn \n %bully mp \n %windows 10 \n %ahmad \n %soviet anthem**");
    }          
    if(message.content == "%bully") {
        message.channel.send("Downl.., umm I mean, BUY Bully: Scholarship Edition legally here! \n http://store.steampowered.com/app/12200/Bully_Scholarship_Edition");
    }          
});

bot.login(process.env.BOT_TOKEN);
