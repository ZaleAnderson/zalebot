//BOT LINK https://discord.com/oauth2/authorize?client_id=742576219735719957&scope=bot&permissions=1074130016
//THIS CODE HAS A MIT LICENSE
const Discord = require('discord.js');
const client = new Discord.Client();
const user = client.users.cache.get('645713081871106053');
const guild = client.guilds.cache.get('645713081871106053');
const talkedRecently = new Set();
const Enmap = require("enmap");
client.cookies = new Enmap({name: "cookies"});
//OCT 13 UTC TIME
//FUN FACT TIME
var options = ["VR Pirates was originally called SuccHub", "~2% of Quest owners actually have a pirated game", "This bot is only supposed to give out cookies but then Zale got bored of it.", "The VR Pirates Discord has ~2800 members", "The first channel to exist in this Discord is <#757329103677292695>", "I can give up to 5 cookies at once.", "VR Pirates gets around 30-50 new members a day.", "YOU NEED TO READ THE FAQ"];
//RESTART DELAY
var delayInMilliseconds = 10; //.01 second
//START COMMANDS
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Cookie baking', {
  	type: "STREAMING",
  	url: "https://www.youtube.com/watch?v=-PcclLPPoyc"
	})
})

//TELL NEW MEMBERS TO READ THE FAQ
client.on('guildMemberAdd', function(member){
	member.send("Welcome to VR Pirates ***PLEASE READ THE*** " + "<#757660028940451900> and feel free to message <@258027565363625984> if you need anything!");
})


client.on('message', msg => {
	//SIKI			//STAFF CHAT
if (msg.channel != '722909622855401512' ) {
if (msg.content.includes('VR Bay')) {
	msg.channel.send("  We are aware of the issue as he contacted many of our members and has been banned. Please ignore the message if you want to as we aren't associated with that server in anyway. Thank you for reporting it.   ");
	}
if (msg.content.includes('VR bay')) {
	msg.channel.send("  We are aware of the issue as he contacted many of our members and has been banned. Please ignore the message if you want to as we aren't associated with that server in anyway. Thank you for reporting it.   ");
	}
if (msg.content.includes('vr bay')) {
	msg.channel.send("  We are aware of the issue as he contacted many of our members and has been banned. Please ignore the message if you want to as we aren't associated with that server in anyway. Thank you for reporting it.   ");
	}
if (msg.content.includes('Vr Bay')) {
	msg.channel.send("  We are aware of the issue as he contacted many of our members and has been banned. Please ignore the message if you want to as we aren't associated with that server in anyway. Thank you for reporting it.   ");
	}
if (msg.content.includes('Vr bay')) {
	msg.channel.send("  We are aware of the issue as he contacted many of our members and has been banned. Please ignore the message if you want to as we aren't associated with that server in anyway. Thank you for reporting it.  ");
	}
if (msg.content.includes('Qvuu6Q5')) {
	msg.delete()
	client.channels.cache.get('729505227320852520').send('Someone sent a SIKI invite in the VRP Server');
	client.channels.cache.get('729505227320852520').send('Copy this code for a quick ban');
	client.channels.cache.get('729505227320852520').send(  '+ban ' + `<@${msg.author.id}> R15`   );
	}

//RULES
if (msg.content.includes('ZA Rules')) {
	msg.delete()
	if (msg.mentions.members.first()) {
		msg.channel.send(`${msg.mentions.members.first()}` + ' has been told to read the rules.');
		msg.mentions.members.first().send('Please read the <#757657836632146101>! Next time you will be warned!')
	}
	else msg.channel.send("**Beep boop** You forgot to mention someone in your message!");
}
	


	//COOLDOWN?
if (msg.author.id != '258027565363625984') {
	if (talkedRecently.has(msg.author.id)) {
		return;
	  }
	
	  setTimeout(() => {
		talkedRecently.delete(msg.author.id);
	  }, 20000);
}

	//FUN FACT TIME
	if (msg.content.includes('fun fact')) {
		talkedRecently.add(msg.author.id);
		var response = options[Math.floor(Math.random()*options.length)];
		msg.channel.send(response).then().catch(console.error);
  }
	//THANKS
    if (msg.content.includes('thank')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
  }
     if (msg.content.includes('Thank')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
  }
	//COOKIES
    if (msg.content.includes('cookie')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
  }
    if (msg.content.includes('Cookie')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
  }
  if (msg.content.includes('two cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
  }
  if (msg.content.includes('three cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118371476111360');
	msg.react('758118444091965450');
  }
  if (msg.content.includes('four cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118371476111360');
	msg.react('758118444091965450');
	msg.react('758119221644361731');
  }
  if (msg.content.includes('five cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118371476111360');
	msg.react('758118444091965450');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
  }
  if (msg.content.includes('2 cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
  }
  if (msg.content.includes('3 cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
  }
  if (msg.content.includes('4 cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
  }
  if (msg.content.includes('5 cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
  }
    if (msg.content.includes('Good job')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
  }
    if (msg.content.includes('good job')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
 }

	 //COOKIE COUNT

	//REFER TO FAQ
	if (msg.content.includes('find apks')) {
	msg.channel.send("  Please read the <#757660028940451900>!  ");
	}
	if (msg.content.includes('get apk')) {
	msg.channel.send("  Please read the <#757660028940451900>!  ");
	}
	if (msg.content.includes('get Apk')) {
	msg.channel.send("  Please read the <#757660028940451900>!  ");
	}
	if (msg.channel != '645713082588594188' ) {
	if (msg.content.includes('help me')) {
	msg.channel.send("  Please read the <#757660028940451900> before asking for help! ");
	}
	if (msg.content.includes('Help me')) {
	msg.channel.send("  Please read the <#757660028940451900> before asking for help!  ");
	}
	}
	if (msg.content.includes('find games')) {
	msg.channel.send("  Please read the <#757660028940451900>!  ");
	}
	if (msg.content.includes('get games')) {
	msg.channel.send("  Please read the <#757660028940451900>!  ");
	}
	if (msg.content.includes('free games')) {
	msg.channel.send("  Please read the <#757660028940451900>!  ");
	}
	if (msg.content.includes('free apk')) {
	msg.channel.send("  Please read the <#757660028940451900>!  ");
	}
	if (msg.content.includes('n APK')) {
	msg.channel.send("  Please read the <#757660028940451900>!  ");
	}
	if (msg.content.includes('free APK')) {
	msg.channel.send("  Please read the <#757660028940451900>!  ");
	}
	if (msg.content.includes("won't detect")) {
	msg.channel.send("  Please make sure you have ADB drivers installed and developer mode enable on your Quest  ");
	}
	if (msg.content.includes("wont detect")) {
	msg.channel.send("  Please make sure you have ADB drivers installed and developer mode enable on your Quest  ");
	}
	
	//QUEST 2
	if (msg.content.includes('work on quest 2')) {
	msg.channel.send("  We do not currently know if Quest apps and current sideloading methods will work on the newest Quest. Please refer to the pinned messages in <#721119774301487164> for more details.  ");
	}
	if (msg.content.includes('work on Quest 2')) {
	msg.channel.send("  We do not currently know if Quest apps and current sideloading methods will work on the newest Quest. Please refer to the pinned messages in <#721119774301487164> for more details.  ");
	}
	if (msg.content.includes('work on the quest 2')) {
	msg.channel.send("  We do not currently know if Quest apps and current sideloading methods will work on the newest Quest. Please refer to the pinned messages in <#721119774301487164> for more details.  ");
	}
	if (msg.content.includes('work on the Quest 2')) {
	msg.channel.send("  We do not currently know if Quest apps and current sideloading methods will work on the newest Quest. Please refer to the pinned messages in <#721119774301487164> for more details.  ");
	}
	if (msg.content.includes('quest 2 games')) {
	msg.channel.send("  We do not currently know if Quest apps and current sideloading methods will work on the newest Quest. Please refer to the pinned messages in <#721119774301487164> for more details. ");
	}
	if (msg.content.includes('Quest 2 games')) {
	msg.channel.send("  We do not currently know if Quest apps and current sideloading methods will work on the newest Quest. Please refer to the pinned messages in <#721119774301487164> for more details. ");
	}
	if (msg.content.includes('on the new quest')) {
	msg.channel.send("  We do not currently know if Quest apps and current sideloading methods will work on the newest Quest. Please refer to the pinned messages in <#721119774301487164> for more details. ");
	}
	if (msg.content.includes('on the new Quest')) {
	msg.channel.send("  We do not currently know if Quest apps and current sideloading methods will work on the newest Quest. Please refer to the pinned messages in <#721119774301487164> for more details. ");
	}
	if (msg.content.includes('sideload on quest 2')) {
	msg.channel.send(" https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/unknown.png ");
	}
	if (msg.content.includes('sideload on Quest 2')) {
	msg.channel.send("  https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/unknown.png ");
	}
	if (msg.content.includes('pirate on Quest 2')) {
	msg.channel.send("  We do not currently know if Quest apps and current sideloading methods will work on the newest Quest. Please refer to the pinned messages in <#721119774301487164> for more details. ");
	}
	if (msg.content.includes('pirate on quest 2')) {
	msg.channel.send("  We do not currently know if Quest apps and current sideloading methods will work on the newest Quest. Please refer to the pinned messages in <#721119774301487164> for more details. ");
	}



	//FAQ QUESTIONS
		//SAFESIDE
	if (msg.content.includes('safeside')) {
	msg.channel.send("  Please do not use SideQuest to sideload external cracked content. Download Rookie Sideloader VRP Edition from https://t.me/VRPirates  ");
	}
	if (msg.content.includes('SAFESIDE')) {
	msg.channel.send("  Please do not use SideQuest to sideload external cracked content. Download Rookie Sideloader VRP Edition from https://t.me/VRPirates ");
	}
	if (msg.content.includes('read 1 of null')) {
	msg.channel.send("  Please remove the '-' from the filename and everything after it.  ");
	}

		//SIDELOADER
	if (msg.content.includes('get the sideloader')) {
	msg.channel.send("  Download Rookie Sideloader VRP Edition from https://t.me/VRPirates  ");
	}
	if (msg.content.includes('find rookie sideloader again')) {
	msg.channel.send("  Download Rookie Sideloader VRP Edition from https://t.me/VRPirates  ");
	}
	if (msg.content.includes('use the sideloader')) {
	msg.channel.send("  Please refer to this video  ");
	msg.channel.send("  https://canary.discordapp.com/channels/645713081871106053/757660028940451900/757673842847121510  ");
	}
	if (msg.content.includes('use the side loader')) {
	msg.channel.send("  Please refer to this video  ");
	msg.channel.send("  https://canary.discordapp.com/channels/645713081871106053/757660028940451900/757673842847121510  ");
	}
	if (msg.content.includes('is the sideloader')) {
	msg.channel.send("  Rookie's Android Sideloader is a Windows x64 based adb tool with a graphical interface to make sideloading apks and obbs easier and more intuitive. Download Rookie Sideloader VRP Edition from https://t.me/VRPirates ");
	}
	if (msg.content.includes('is the side loader')) {
	msg.channel.send("  Rookie's Android Sideloader is a Windows x64 based adb tool with a graphical interface to make sideloading apks and obbs easier and more intuitive. Download Rookie Sideloader VRP Edition from https://t.me/VRPirates ");
	}
	if (msg.content.includes('ownload the sideloader')) {
	msg.channel.send("  Download Rookie Sideloader VRP Edition from https://t.me/VRPirates  ");
	}
	if (msg.content.includes('sideloader on mac')) {
	msg.channel.send("  There is no intent of making a version for Mac, please look here for more info <#757660028940451900> ");
	}
	if (msg.content.includes('sideloader on github')) {
	msg.channel.send(" https://github.com/nerdunit/androidsideloader/releases  ");
	}

		//MANUALLY
	if (msg.channel != '645713082588594188' ) {
	if (msg.content.includes('manually')) {
	msg.channel.send("  Trying to sideload the manual way? Look here! <#757660028940451900>! ");
	}
	}

		//CANNOT FIND GAMES
	if (msg.content.includes('cannot find the games')) {
	msg.channel.send("  Cannot find the games on your Quest? From your Quest headset, go to Library -> Unknown Sources ");
	}

		//CANNOT FIND HEADSET
	if (msg.content.includes('cannot find headset')) {
	msg.channel.send("  Please make sure developer mode is enabled on the headset, the oculus adb drivers install on your computer, and to accept the prompts in the headset. Still not working? Contact a staff member or read through <#757660028940451900> ");
	}
	if (msg.content.includes('cannot see headset')) {
	msg.channel.send("  Please make sure developer mode is enabled on the headset, the oculus adb drivers install on your computer, and to accept the prompts in the headset. Still not working? Contact a staff member or read through <#757660028940451900> ");
	}
	if (msg.content.includes('headset not detected')) {
	msg.channel.send("  Please make sure developer mode is enabled on the headset, the oculus adb drivers install on your computer, and to accept the prompts in the headset. Still not working? Contact a staff member or read through <#757660028940451900> ");
	}
	if (msg.content.includes('cannot see my headset')) {
	msg.channel.send("  Please make sure developer mode is enabled on the headset, the oculus adb drivers install on your computer, and to accept the prompts in the headset. Still not working? Contact a staff member or read through <#757660028940451900> ");
	}
	if (msg.content.includes('cannot find my headset')) {
	msg.channel.send("  Please make sure developer mode is enabled on the headset, the oculus adb drivers install on your computer, and to accept the prompts in the headset. Still not working? Contact a staff member or read through <#757660028940451900> ");
	}

		//BLACK SCREEN
	if (msg.content.includes('black s')) {
	msg.channel.send("  Please reinstall the app and check to make sure if it has an obb, it was installed correctly.");
	msg.channel.send("***IF YOU GOT THE GAME FROM THE GOOGLE DRIVE, PLEASE COPY AND PASTE THE FILENAME OF THE OBB HERE FIRST, IF I RESPOND, DO WHAT I SAY***")
	} 
	if (msg.content.includes('-00')) {
		msg.channel.send("  Please remove the '-' from the filename and everything after it.  ");
		}
	if (msg.content.includes('.00')) {
		msg.channel.send("  Please remove the '.' from the filename and everything after it.  ");
		}
		
		//INSTALL GAMES
	if (msg.content.includes('install pcvr games')) {
	msg.channel.send("  Please refer here for instructions https://discord.com/channels/645713081871106053/757660028940451900  ");
	}
	if (msg.content.includes('install PCVR games')) {
	msg.channel.send("  Please refer here for instructions https://discord.com/channels/645713081871106053/757660028940451900  ");
	}
	if (msg.content.includes('install games')) {
	msg.channel.send("  Please refer here for instructions https://discord.com/channels/645713081871106053/757660028940451900  ");
	}
	if (msg.content.includes('help installing')) {
	msg.channel.send("  Please refer here for instructions https://discord.com/channels/645713081871106053/757660028940451900  ");
	}
	if (msg.content.toLowerCase() === 'install apks') {
	msg.channel.send("Please refer here for instructions https://discord.com/channels/645713081871106053/757660028940451900");
	}
		//MULTIPLAYER
	if (msg.content.includes('multiplayer work')) {
	msg.channel.send("  Most patched games do not have working multiplayer. Dead & Buried 2, Drunkn Bar Fight, Elven Assassin, and Onward are reported to work, however.  ");
	}
		//BANNED
	if (msg.content.includes('get banned')) {
	msg.channel.send("  There have been no reports of anyone getting banned from pirating or sideloading. But please be careful making alt accounts on Facebook to use on your Quest 2. Facebook is quickly banning these accounts making them unable to use on the Quest 2 and potentially putting your Oculus account in danger. ");
	}
		//TELEMETRY
	if (msg.content.includes('disable telemetry')) {
	msg.channel.send("  Looking to disable the telemetry? Use this! https://github.com/ZaleAnderson/zalebot/blob/master/Quest_dt.zip?raw=true ");
	}
		//INCREASE QUEST 1 RESOLUTION
	if (msg.content.includes('increase resolution')) {
	msg.channel.send("  Looking to increase the resolution of the Quest? Try one of these. (Not Tested) https://drive.google.com/file/d/1dhW6QZW7u8M9xM8rQ-S0937Pgd0GpJvK/view ");
	}
	if (msg.content.includes('quests resolution')) {
		msg.channel.send(" Looking to increase the resolution of the Quest? Try one of these. (Not Tested) https://drive.google.com/file/d/1dhW6QZW7u8M9xM8rQ-S0937Pgd0GpJvK/view");
		}
	if (msg.content.includes('quest resolution')) {
		msg.channel.send("  Looking to increase the resolution of the Quest? Try one of these. (Not Tested) https://drive.google.com/file/d/1dhW6QZW7u8M9xM8rQ-S0937Pgd0GpJvK/view ");
		}
		//VIRTUAL DESKTOP
	if (msg.content.includes('inject')) {
	msg.channel.send("  This should help you! <#757660028940451900> ");
	}
	if (msg.content.includes('virtual desktop cracked')) {
	msg.channel.send("  There is no apk or for free Virtual Desktop or anyway to get it for free.  ");
	}
	if (msg.content.includes('vd cracked')) {
	msg.channel.send("  There is no apk or for free Virtual Desktop or anyway to get it for free.  ");
	}
	if (msg.content.includes('vd for free')) {
	msg.channel.send("  There is no apk or for free Virtual Desktop or anyway to get it for free.  ");
	}
	if (msg.content.includes('virtual desktop for free')) {
	msg.channel.send("  There is no apk or for free Virtual Desktop or anyway to get it for free.  ");
	}
	if (msg.content.includes('free virtual desktop')) {
	msg.channel.send("  There is no apk or for free Virtual Desktop or anyway to get it for free.  ");
	}
	if (msg.content.includes('free vd')) {
	msg.channel.send("  There is no apk or for free Virtual Desktop or anyway to get it for free.  ");
	}
	if (msg.content.includes('pirate virtual desktop')) {
	msg.channel.send("  There is no apk or for free Virtual Desktop or anyway to get it for free.  ");
	}
	if (msg.content.includes('apk for virtual desktop')) {
		msg.channel.send("  There is no apk or for free Virtual Desktop or anyway to get it for free.  ");
		}
		//BEAT SABER
	if (msg.content.includes('mod beat saber')) {
	msg.channel.send("  Use BMBF for that. If this did not help, please refer to <#721121331130925176> ");
	}
	if (msg.content.includes('mod Beat Saber')) {
	msg.channel.send("  Use BMBF for that. If this did not help, please refer to <#721121331130925176> ");
	}
	if (msg.content.includes('mod Beat saber')) {
	msg.channel.send("  Use BMBF for that. If this did not help, please refer to <#721121331130925176> ");
	}
	if (msg.content.includes('mod Beatsaber')) {
	msg.channel.send("  Use BMBF for that. If this did not help, please refer to <#721121331130925176> ");
	}
	if (msg.content.includes('mod beatsaber')) {
	msg.channel.send("  Use BMBF for that. If this did not help, please refer to <#721121331130925176> ");
	}
	if (msg.content.includes('custom songs')) {
	msg.channel.send("  Trying to install more songs for more Beat Saber fun? Use BMBF for that! If this did not help, please refer to <#721121331130925176> ");
	}
		//GOOGLE DRIVE
	if (msg.content.includes('download quota exceeded')) {
	msg.channel.send("  Hey there! Please use ALL of the mirrors provided to get around Google quotas.  This is the way. :)  ");
	}
		//NOTIFI VR
	if (msg.content.includes('phone notification')) {
	msg.channel.send("  Looking for a way to get your phone's notifications on your **original** Quest? Try this app me and a buddy developed. Join the Discord to get started. ");
	msg.channel.send("  NVR Discord ");
	}

	//RANDOM COOKIES
	var rand = Math.floor(Math.random() * 1000);
    if (rand===5) {
    msg.react('🍪');
	}
	
	//BOT TAG
	if (msg.content.includes('742576219735719957')) {
		msg.channel.send("  Hey look, you tagged me! Sadly, I don't like talking to people who ping me so I will ping <@258027565363625984> for you instead. :D ");
		}

	//INVITES
	if (msg.content.includes('VRP Discord')) {
	msg.channel.send("  https://discord.gg/TcFnuh7  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.includes('Test Discord')) {
	msg.channel.send("  https://discord.gg/SeFHWZ9  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.includes('SQ Discord')) {
	msg.channel.send("  https://discord.com/invite/sidequest  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.includes('BSMG Discord')) {
	msg.channel.send("  https://discord.gg/beatsabermods  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.includes('QH Discord')) {
	msg.channel.send("  https://discord.gg/VXZrQ7t  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.includes('Qos Discord')) {
	msg.channel.send("  https://discord.gg/MEBVngG  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.includes('QB Discord')) {
	msg.channel.send("  https://discord.gg/d6DyW9v  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.includes('NVR Discord')) {
	msg.channel.send("  https://discord.gg/BsKfdHW  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.includes('delete this')) {
	msg.delete()
	}
	//TOOLS
		//STAFF ONLY
	if (msg.content.includes('ZAR')) {
		//MAKE THE RESTART VISIBLE
	msg.delete()
  	client.user.setActivity("RESTARTING...", {
	type: "LISTENING",
	url: "https://www.youtube.com/watch?v=-PcclLPPoyc"
	})
	setTimeout(function() {
		//NOT A REAL RESTART COMMAND BUT IT WORKS
	killall(); 
	}, delayInMilliseconds);	
	msg.delete()
	}

		//ICONS
	if (msg.content.includes('ZA Icons')) {
		talkedRecently.add(msg.author.id);
	msg.channel.send("https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/Logo.png");
	msg.channel.send("https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/Comp-1-4.gif");
	msg.channel.send("https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/Comp-1-3.gif");
	msg.channel.send("https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/9a38967ad80a7806540bb08694845aba.png");
	msg.channel.send("https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/VRPHalloween.gif");
	}
	
		//PURGE TEST
	if (msg.content == "ZA Clear") {
        if (msg.member.hasPermission("MANAGE_MESSAGES")) {
            msg.channel.messages.fetch()
               .then(function(list){
                    msg.channel.bulkDelete(list);
                }, function(err){msg.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

		//VERSION
	if (msg.content.includes('ZA Version')) {
		talkedRecently.add(msg.author.id);
		msg.delete()
	msg.channel.send("This bot's version is Build 145");
	}

		//PING
	if (msg.content.includes('ZA Ping')) {
		talkedRecently.add(msg.author.id);
		msg.delete()
		const d = new Date();
		date = d.getHours() + ":" + d.getMinutes() + " EST " + d.toDateString();
		msg.channel.send('Your ping is `' + `${msg.createdTimestamp - Date.now()}` + ' ms`');
		msg.channel.send(date);
	}
	if (msg.content.includes('ZA Time')) {
		talkedRecently.add(msg.author.id);
		//TEST
		msg.delete()
		msg.channel.send(`${Date.now()}`); 
		//VRP
//      client.channels.cache.get('645786760101494815').send(date);
//		const d = new Date();
//		date = d.getHours() + ":" + d.getMinutes() + " EST " + d.toDateString();
//		msg.channel.send(date);
	}
		//CHECK
	if (msg.content.includes('ZA Test')) {
		talkedRecently.add(msg.author.id);
	msg.delete()
	msg.channel.send("ZA Version");
	const d = new Date();
		date = d.getHours() + ":" + d.getMinutes() + " EST " + d.toDateString();
		msg.channel.send('Bot ping is `' + `${Date.now() - msg.createdTimestamp}` + ' ms`');
		msg.channel.send(date);
	msg.channel.send("This bot is running.");
	}
	if (msg.content.includes('ZA Bug')) {
	client.users.cache.get('258027565363625984').send('Someone has found a bug!');
	msg.channel.send('<@258027565363625984> has been notified!');
	msg.channel.send('ZAR');
	}

	//TIME UNTIL QUEST 2
	if (msg.content.includes('ZA Countdown')) {
		var releaseDate = 1602561585600;
		var difDate = (releaseDate - Date.now());
		var leftTime = (difDate / 86400000);
		var downTime = Math.trunc(leftTime);
		var gifPost = 0;
		msg.delete()
		msg.author.send((`***${downTime}***` + '  days until Quest 2'));
		if (msg.author.id == '258027565363625984') {
			msg.channel.send(`${leftTime}` + ' days left until Oct. 13');
			msg.channel.send(`${difDate}` + ' milliseconds left until Oct. 13');
			msg.channel.send(`${gifPost}` + ' times Oct. 13 has been passed');
		}
	}

	if (msg.content.includes('')) {
		//OCT 13 UTC TIME
	var releaseDate = 1602561585600;
	var difDate = (releaseDate - Date.now());
	var leftTime = (difDate / 86400000);
	var downTime = Math.trunc(leftTime);
	var gifPost = 0;
		if (leftTime <= 0 ) {
			if (gifPost == 0 ) {
			gifPost = gifPost + 1;
			client.channels.cache.get('645786760101494815').send("  https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/Release%20Gif%20(2).gif  ");
			}
		}
	}

	//STATUS
	if (msg.content.includes('')) {
		talkedRecently.add(msg.author.id);
  client.user.setActivity(`${downTime}` + ' days until Quest 2', {
  	type: "STREAMING",
  	url: "https://www.youtube.com/watch?v=-PcclLPPoyc"
	})
		}
	
	//POST IN A SPECIFIC CHANNEL
	//if (msg.content.includes('post in announcments')) {
	//client.channels.cache.get('645786760101494815').send('Please be careful making alt accounts on Facebook to use on your Quest 2. Facebook is quickly banning these accounts making it unable to use on the Quest 2 and potentially putting your Oculus account in danger');   
	//msg.delete()
	//}
	


	//SOCIALS
	if (msg.content.includes('ZA Instagram')) {
		msg.delete()
		msg.author.send("https://www.instagram.com/zaleanderson/");
		}
	if (msg.content.includes('ZA Snapchat')) {
		msg.delete()
		msg.author.send("https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/snapcodeZale.png");
		}
	if (msg.content.includes('ZA Spotify')) {
		msg.delete()
		msg.author.send("https://open.spotify.com/user/12142337389?si=XU4kybEBRAiVM3Jz4mlPdw");
		}
	if (msg.content.includes('ZA Number')) {
		msg.delete()
		msg.author.send("+1 (413) 366-1989");
		}

	//CREDITS
	if (msg.content.includes('Treasure Chest')) {
		msg.delete()
	msg.author.send('https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/BotCreds.png');
	}
	const embed = {
		"color": 16711777,
  "footer": {
    "icon_url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true",
    "text": "© 2020 Zale Anderson || DM 01001000"
  },
  "thumbnail": {
    "url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true"
  },
  "image": {
    "url": "https://github.com/ZaleAnderson/zalebot/blob/master/Logo.png?raw=true"
  },
  "author": {
    "name": "Zale Bot",
    "url": "https://discordapp.com",
    "icon_url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true"
  },
  "fields": [
    {
      "name": "***Zale Bot Commands PAGE 1***",
      "value": "========================"
    },
    {
      "name": "**ZAR**",
      "value": "Restarts the bot (Visible on bot status)"
	},
	{
		"name": "**ZA Rules @mention **",
		"value": "Tells the mentions user to read the rules"
	},
    {
      "name": "**ZA Test**",
      "value": "Runs a few commands to make sure the bot is working"
    },
    {
      "name": "**ZA Ping**",
      "value": "Pings the bot"
    },
    {
      "name": "**ZA Time**",
      "value": "Gives the epoch time"
    },
    {
      "name": "**ZA Version**",
      "value": "Displays bot build number"
    },
    {
      "name": "**ZA Help**",
      "value": "DMs user this"
    },
    {
      "name": "**ZA Triggers**",
      "value": "DMs the user a trigger list"
    },
    {
      "name": "**ZA Clear**",
      "value": "Purges the last 100 messages"
    },
    {
      "name": "**ZA Icons**",
      "value": "Gives icons related to Zale bot and VRP"
    },
    {
      "name": "**ZA Bug**",
      "value": "DMs Zale saying you found a bug"
    },
    {
      "name": "**ZA Donate**",
      "value": "Gives Zale's paypal.me link"
    },
    {
      "name": "**Treasure Chest**",
      "value": "DMs user bot credits"
    },
    {
      "name": "**VRP Discord**",
      "value": "Gives VRP Discord invite in text channel"
    },
    {
      "name": "**SQ Discord**",
      "value": "Gives the SideQuest Discord invite"
    },
    {
      "name": "**BSMG Discord**",
      "value": "Gives the Beat Saber Modding Group Discord invite"
    },
    {
      "name": "**QH Discord**",
      "value": "Gives the Quest Homes Discord invite"
    },
    {
      "name": "**Qos Discord**",
      "value": "Gives the Qosmetics (QuestSaber) Discord invite"
    },
    {
      "name": "**QB Discord**",
      "value": "Gives the QuestBoard Discord invite"
    },
    {
      "name": "**Test Discord**",
      "value": "Gives Zale Bot testing Discord invite"
    },
    {
      "name": "**ZA Number**",
      "value": "DMs user Zale's alt phone number"
    },
    {
      "name": "**ZA Spotify**",
      "value": "DMs user Zale's Spotify"
    },
    {
      "name": "**ZA Snapchat**",
      "value": "DMs user Zale's Snapchat"
    },
    {
      "name": "***Any sentence that contains: who, what, when, where, how, why, Zale, @ , or an attachment is automatically logged to help improve the bot.***",
      "value": "‎"
    }
  ]
};
const embed0 = {
	"color": 16711777,
"footer": {
"icon_url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true",
"text": "© 2020 Zale Anderson || DM 01001000"
},
"thumbnail": {
"url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true"
},
"image": {
"url": "https://github.com/ZaleAnderson/zalebot/blob/master/Logo.png?raw=true"
},
"author": {
"name": "Zale Bot",
"url": "https://discordapp.com",
"icon_url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true"
},
"fields": [
{
  "name": "***Zale Bot Commands PAGE 2***",
  "value": "========================"
},
{
	"name": "**ZA Instagram**",
	"value": "DMs user Zale's Instagram"
},
{
  "name": "**NVR Discord**",
  "value": "Gives NotifiVR Discord link"
},
{
  "name": "**ZA Countdown**",
  "value": "__ days until Quest 2"
},
{
  "name": "***Any sentence that contains: who, what, when, where, how, why, Zale, @ , or an attachment is automatically logged to help improve the bot.***",
  "value": "‎"
}
]
};
const embed1 = {
	"color": 16711777,
	"footer": {
	  "icon_url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true",
	  "text": "© 2020 Zale Anderson || DM 01001000"
	},
	"thumbnail": {
	  "url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true"
	},
	"image": {
	  "url": "https://github.com/ZaleAnderson/zalebot/blob/master/Logo.png?raw=true"
	},
	"author": {
	  "name": "Zale Bot",
	  "url": "https://discordapp.com",
	  "icon_url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true"
	},
	"fields": [
	  {
		"name": "***Zale Bot Triggers PAGE 1***",
		"value": "========================"
	  },
	  {
		"name": "**Thank**",
		"value": "Reacts with a cookie"
	  },
	  {
		"name": "**Cookie**",
		"value": "Reacts with a cookie"
	  },
	  {
		"name": "**Two/2 cookies**",
		"value": "Reacts with two cookies"
	  },
	  {
		"name": "**Three/3 cookies**",
		"value": "Reacts with three cookies"
	  },
	  {
		"name": "**Four/4 cookies**",
		"value": "Reacts with four cookies"
	  },
	  {
		"name": "**Five/5 cookies**",
		"value": "Reacts with five cookies"
	  },
	  {
		"name": "**Good Job**",
		"value": "Reacts with a cookie"
	  },
	  {
		"name": "**find apks/get apk/free apk/n APK**",
		"value": "Please read the #faq!"
	  },
	  {
		"name": "**find games/get games/free games**",
		"value": "Please read the #faq!"
	  },
	  {
		"name": "**Help me**",
		"value": "Please read the #faq before asking for help!"
	  },
	  {
		"name": "**won't detect**",
		"value": "Please make sure you have ADB drivers installed and developer mode enable on your Quest"
	  },
	  {
		"name": "**work on Quest 2/work on the Quest 2/Quest 2 games/on the new Quest/pirate on Quest 2**",
		"value": "We do not currently know if Quest apps and current sideloading methods will work on the newest Quest. Please refer to the pinned messages in #quest for more details."
	  },
	  {
		"name": "**sideload on Quest 2**",
		"value": "https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/unknown.png"
	  },
	  {
		"name": "**Safeside**",
		"value": "Please do not use SideQuest to sideload external cracked content"
	  },
	  {
		"name": "**read 1 of null/-00/.00**",
		"value": "Please remove the '-' or '.' from the filename and everything after it."
	  },
	  {
		"name": "**get the sideloader/ownload the sideloader**",
		"value": "Download Rookie Sideloader VRP Edition from https://t.me/VRPirates"
	  },
	  {
		"name": "**use the sideloader/use the side loader**",
		"value": "Please refer to this video https://canary.discordapp.com/channels/645713081871106053/757660028940451900/757673842847121510"
	  },
	  {
		"name": "**is the sideloader/is the side loader**",
		"value": "Rookie's Android Sideloader is a Windows x64 based adb tool with a graphical interface to make sideloading apks and obbs easier and more intuitive. Download Rookie Sideloader VRP Edition from https://t.me/VRPirates"
	  },
	  {
		"name": "**sideloader on mac**",
		"value": "There is no intent of making a version for Mac, please look here for more info #faq"
	  },
	  {
		"name": "**sideloader on github**",
		"value": "https://github.com/nerdunit/androidsideloader/releases"
	  },
	  {
		"name": "**manually**",
		"value": "Trying to sideload the manual way? Look here! #faq!"
	  },
	  {
		"name": "**cannot find the games**",
		"value": "Cannot find the games on your Quest? From your Quest headset, go to Library -> Unknown Sources"
	  },
	  {
		"name": "**cannot find headset/cannot see headset/headset not detected/cannot see my headset/cannot find my headset**",
		"value": "Please make sure developer mode is enabled on the headset, the oculus adb drivers install on your computer, and to accept the prompts in the headset. Still not working? Contact a staff member or read through #faq"
	  },
	  {
		"name": "***Any sentence that contains: who, what, when, where, how, why, Zale, @ , or an attachment is automatically logged to help improve the bot.***",
		"value": "‎‎"
	  }
	]
  };
  const embed2 = {
	"color": 16711777,
	"footer": {
	  "icon_url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true",
	  "text": "© 2020 Zale Anderson || DM 01001000"
	},
	"thumbnail": {
	  "url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true"
	},
	"image": {
	  "url": "https://github.com/ZaleAnderson/zalebot/blob/master/Logo.png?raw=true"
	},
	"author": {
	  "name": "Zale Bot",
	  "url": "https://discordapp.com",
	  "icon_url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true"
	},
	"fields": [
	  {
		"name": "***Zale Bot Triggers PAGE 2***",
		"value": "========================"
	  },
	  {
		"name": "**black screen**",
		"value": "Please reinstall the app and check to make sure if it has an obb, it was installed correctly. Also, if there is a dash, please remove the '-' and everything after it. Refer here for more info https://discord.com/channels/645713081871106053/757660028940451900"
	  },
	  {
		"name": "**install PCVR games/install games/install apks/help installing**",
		"value": "Please refer here for instructions https://discord.com/channels/645713081871106053/757660028940451900"
	  },
	  {
		"name": "**multiplayer work**",
		"value": "Most patched games do not have working multiplayer. Dead & Buried 2, Drunkn Bar Fight, Elven Assassin, and Onward are reported to work, however."
	  },
	  {
		"name": "**get banned**",
		"value": "There have been no reports of anyone getting banned from pirating or sideloading."
	  },
	  {
		"name": "**disable telemetry**",
		"value": "Looking to disable the telemetry? Use this! https://github.com/ZaleAnderson/zalebot/blob/master/Quest_dt.zip?raw=true"
	  },
	  {
		"name": "**increase resolution/quests resolution/quest resolution**",
		"value": "Looking to increase the resolution of the Quest? Try one of these. (Not Tested) https://drive.google.com/file/d/1dhW6QZW7u8M9xM8rQ-S0937Pgd0GpJvK/view"
	  },
	  {
		"name": "**inject**",
		"value": "This should help you! #faq"
	  },
	  {
		"name": "**virtual desktop cracked/vd cracked/vd for free/virtual desktop for free/free vd/pirate virtual desktop**",
		"value": "There is no apk for virtual desktop or anyway to get it for free."
	  },
	  {
		"name": "**mod beat saber/mod beatsaber**",
		"value": "Use BMBF for that. If this did not help, please refer to #beat-saber-mods"
	  },
	  {
		"name": "**download quota exceeded**",
		"value": "Hey there! Please right click on the file you are trying to download and click make a copy. :)"
	  },
	  {
		"name": "**Taylor Swift**",
		"value": "Sends fun message"
	  },
	  {
		"name": "**Porn**",
		"value": "https://github.com/ZaleAnderson/zalebot/blob/master/no-i-m-with-the-science-video-720p-mp4.mp4?raw=true"
	  },
	  {
		"name": "**jason**",
		"value": "https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/JASON.png"
	  },
	  {
		"name": "**Shutup bot**",
		"value": "Middle finger reaction"
	  },
	  {
		"name": "**good zale bot**",
		"value": "Cookie reaction & Beep boop YAAAAY"
	  },
      {
        "name": "**phone notification‎**",
        "value": "Looking for a way to get your phone's notifications on your **original** Quest? Try this app me and a buddy developed. Join the Discord to get started. NVR Discord‎"
      },
      {
        "name": "**ANY MESSAGE‎**",
        "value": "triggers bot to check for status update‎"
      },
	  {
		"name": "***Any sentence that contains: who, what, when, where, how, why, Zale, @ , or an attachment is automatically logged to help improve the bot.***",
		"value": "‎"
	  }
	]
  };
	if (msg.content.includes('ZA Help')) {
		msg.delete()
	msg.author.send({ embed:embed });
	msg.author.send({ embed:embed0 });
	}
	if (msg.content.includes('ZA Triggers')) {
		msg.delete()
	msg.author.send({ embed:embed1 });
	msg.author.send({ embed:embed2 });
	}
	

	//LOGGING
	if (msg.author.id != '742576219735719957') {
	if (msg.attachments.size>0)
      {
          const fs = require('fs');
          var json = JSON.stringify(msg.attachments);
          json += ',\n';
          fs.appendFile('attachments.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('What'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('what'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('When'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('when'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('Why'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }if (msg.content.includes('why'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('Which'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('which'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('Who'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('who'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('How'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('how'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('Where'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('where'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('questions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('Zale'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('name.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('zale'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('name.json', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('@'))
      {
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('mentions.json', json, function (err) {
          if (err) throw err;
          });
	  }
	}
	
	//SECRETS - HIDDEN ON GITHUB
	if (msg.content.includes('U thot')) { //BrainFuck
	msg.author.send("  U thot ");
	}
	if (msg.content.includes('U thot')) { //Hint
	msg.author.send("  U thot ");
	}
	if (msg.content.includes('U thot')) { //Zale
	msg.author.send("  U thot");
	}
	if (msg.content.includes('U thot')) { //Chloe
	msg.author.send("  U thot ");
	}
	if (msg.content.includes('01000110')) { //Flow
	msg.author.send("  U thot ");
	}
	if (msg.content.includes('U thot')) { //Pmow
	msg.author.send(" U thot  ");
	}
	if (msg.content.includes('U thot')) { //Moana
	msg.channel.send("  Zale has been notified you found this. U thot ");
	client.users.cache.get('258027565363625984').send('Someone has found a the Moana secret code. It is time you send this to her.');
	msg.author.send("  U thot ");
	}
	if (msg.content.includes('U thot')) { //Meredith
	msg.author.send(" U thot  ");
	}
	//RANDOM
		//TAYLOR SWIFT
		if (msg.content.includes('Taylor Swift')) {
			talkedRecently.add(msg.author.id);
			msg.author.send("  Nobody: ");
			msg.author.send("  Not a single soul: ");
			msg.author.send("  Zale: ***DID SOMEBODY SAY TAYLOR SWIFT??*** ");
			}
	if (msg.content.includes('Porn')) {
		talkedRecently.add(msg.author.id);
	msg.channel.send("https://github.com/ZaleAnderson/zalebot/blob/master/no-i-m-with-the-science-video-720p-mp4.mp4?raw=true");
	}
	if (msg.content.includes('jason')) {
		talkedRecently.add(msg.author.id);
	msg.channel.send("https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/JASON.png");
	}
	if (msg.content.includes('Jason')) {
		talkedRecently.add(msg.author.id);
	msg.channel.send("https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/JASON.png");
	}
	if (msg.content.includes('Shutup bot')) {
		talkedRecently.add(msg.author.id);
	msg.react('🖕');
	}
	if (msg.content.includes('Good Zale bot')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
	msg.channel.send("Beep boop YAAAAY");
	}
	if (msg.content.includes('good Zale bot')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
	msg.channel.send("Beep boop YAAAAY");
	}
	if (msg.content.includes('good zale bot')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
	msg.channel.send("Beep boop YAAAAY");
	}
//	//DONATION
	if (msg.content.toLowerCase() === 'za donate') {
		talkedRecently.add(msg.author.id);
		msg.delete()
	msg.channel.send("This is the bot donation link");
	msg.channel.send("https://www.paypal.com/paypalme/ZaleAnderson");
	}
	if (msg.content.includes('SCAM')) {
		talkedRecently.add(msg.author.id);
	msg.channel.send("  Scam ");
	}
	if (msg.content.includes('scam')) {
		talkedRecently.add(msg.author.id);
	msg.channel.send("  Scam ");
	}
}
});//REMOVE A PARA
//LOGIN TOKEN
client.login('U thot');