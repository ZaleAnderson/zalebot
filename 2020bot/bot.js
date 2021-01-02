//BOT LINK https://discord.com/oauth2/authorize?client_id=742576219735719957&scope=bot&permissions=1074130016
//THIS CODE HAS A MIT LICENSE
const Discord = require('discord.js');
const client = new Discord.Client();
const user = client.users.cache.get('645713081871106053');
const guild = 469337044146061324;
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
  var interval = setInterval (function () {
//	var releaseDate = 1602561585600;
//	var difDate = (releaseDate - Date.now());
//	var seclTime = (difDate - 14400000);
//	var secTime = Math.trunc(15 +(difDate / 1000));
//	var leftTime = Math.trunc(difDate / 3600000);
//	var minTime = Math.trunc(leftTime * 60);

client.user.setActivity("'tis the damn season", {
  type: "STREAMING",
  url: "https://www.youtube.com/watch?v=mN3rDTAdM2o&ab_channel=TaylorSwiftVEVO"
})
}, 1 * 5000);
})

//TELL NEW MEMBERS TO READ THE FAQ
client.on("guildMemberAdd", function(member){
	member.send("Welcome to VR Pirates ***PLEASE READ THE*** " + "<#757660028940451900> or you could be BANNED, also feel free to message <@258027565363625984> if you need anything!\n ***(OUTDATED) Please watch this getting started video as it will help you! ---> *** https://youtu.be/tzXE_MI9ASI\n\n\n***Hey there, help us streamline getting games onto the sideloader and rclone! Fill this out:***\nhttps://forms.gle/JXC1qPM52FoBADHC8");
});

client.on('message', msg => { //CURLY BRACKET
if (msg.author.id != '742576219735719957') {
//	client.on("messageReactionAdd", function(messageReaction, member,){
//		let myRole = msg.guild.roles.cache.find(469656968152350731);
//		member.roles.add(myRole);
//	})
if (msg.author.id != '742576219735719957') {
	if (msg.content.includes('ZA')) {
		msg.delete()
	}
}

if (msg.content.includes('ZA DG')) {
	msg.channel.send("Hey there! We are sorry many of you are having issues with the new sideloader update. A downgrade usually fixes all the problems! Here's how to downgrade:\n\n***1)*** Delete the AndroidSideloader.exe in your sideloader folder\n\n***2)*** Go to https://github.com/nerdunit/androidsideloader/releases and get the 1.14 version of the sideloader\n\n***3)*** Put the new AndroidSideloader.exe where the one you deleted was.");
	}



if (msg.content.includes('ZA CC')) {
	msg.channel.send("-Make a fresh oculus account (without facebook on developer.oculus.com)\n-Do the phone verification thing (this option appears when you don't have a fb account linked)\n-Follow these steps to create a organization: https://developer.oculus.com/distribute/publish-account-management-intro/#create-an-organization\n-Follow the steps to add a user (type in the name of your main oculus account that is linked with your fb)\n-Change the role of your new user (your main oculus account) to 'admin'\nNow you can switch on dev mode in the companion app :slight_smile:");
	}

//if (msg.content.includes('uras')) {
//	msg.channel.send("No, it is not cracked yet, don't ask when, we are working on it, if you keep asking, you will be warned.");
//	}

//if (msg.content.includes('TAR WARS')) {
//	msg.channel.send("No, the new Star Wars game is not cracked. Please be patient and keep an eye on <#757674711692869773> to see when it becomes availible. Continuous asking for the game will result in a warn. Thank you -Zale");
//	}
//if (msg.content.includes('tar wars')) {
//	msg.channel.send("No, the new Star Wars game is not cracked. Please be patient and keep an eye on <#757674711692869773> to see when it becomes availible. Continuous asking for the game will result in a warn. Thank you -Zale");
//	}


//DELETE PING
//if (msg.content.includes('258027565363625984')) {
//	msg.delete();
//}

	//SIKI			//STAFF CHAT
if (msg.channel != '722909622855401512' ) {
	if (msg.channel != '733784576769392690' ) {
	if (msg.author.id != '742576219735719957') {
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
	client.channels.cache.get('729505227320852520').send(  '+ban ' + `<@${msg.author.id}> R15 and R12`   );
	}

	//DM
if (msg.channel.type == "dm") {
	if (msg.content.includes('ordered'))
      {
		msg.channel.send("Thank you for replying me! We are so excited to hear you pre-ordered a Quest 2. I appreciate your interest in helping us test and your name has been put on the tester list! We will contact you at a later date when we need you :slight_smile:")
          const fs = require('fs');
          var json = JSON.stringify(msg);
          json += ',\n';
          fs.appendFile('preorder.json', json, function (err) {
          if (err) throw err;
          });
	  }
	 
}

//BREAST CANCER
if (msg.content.includes('pink')) {
	talkedRecently.add(msg.author.id);
	msg.react('762807333121425451');
	}
if (msg.content.includes('Pink')) {
	talkedRecently.add(msg.author.id);
	msg.react('762807333121425451');
	}
if (msg.content.includes('october')) {
	talkedRecently.add(msg.author.id);
	msg.react('762807333121425451');
	}
if (msg.content.includes('October')) {
	talkedRecently.add(msg.author.id);
	msg.react('762807333121425451');
	}
if (msg.content.includes('cancer')) {
	talkedRecently.add(msg.author.id);
	msg.react('762807333121425451');
	}
if (msg.content.includes('breast')) {
	talkedRecently.add(msg.author.id);
	msg.react('762807333121425451');
	}


//K/DA
//if (msg.content.includes('more')) {
//	msg.channel.send('Did somebody say MORE?');
//	msg.channel.send(" https://bit.ly/3heXZNR ");
//}
//if (msg.content.includes("I'll show you")) {
//	msg.channel.send("Did somebody say I'll Show you?");
//	msg.channel.send(" https://bit.ly/3pkTzaM ");
//}
//if (msg.content.includes("villian")) {
//	msg.channel.send('Did somebody say VILLIAN');
//	msg.channel.send(" https://bit.ly/2WIK9d8 ");
//}
//if (msg.content.includes("drum go dum")) {
//	msg.channel.send('Did somebody say DRUM GO DUM?');
//	msg.channel.send(" https://bit.ly/2KOiN2y ");
//}
//if (msg.content.includes("baddest")) {
//	msg.channel.send('Did somebody say BADDEST?');
//	msg.channel.send(" https://bit.ly/3aDouv5 ");
//}
//if (msg.content.includes("popstars")) {
//	msg.channel.send('Did somebody say POP/STARS?');
//	msg.channel.send(" https://bit.ly/3nGjTMa ");
//}

//RULES
if (msg.content.includes('ZA Rules')) {
	msg.delete()
	if (msg.mentions.members.first()) {
		msg.channel.send(`${msg.mentions.members.first()}` + ' has been told to read the rules.');
		msg.mentions.members.first().send('Please read the <#757657836632146101>! Next time you will be warned!')
	}
	else msg.channel.send("**Beep boop** You forgot to mention someone in your message!\n ZA Rules <mention>");
}
	
//VRP INTRODUCTION VIDEO DM
if (msg.content.includes('ZAV')) {
	if (msg.mentions.members.first()) {
		msg.channel.send("Hey there! I just sent a very useful video to you!")
		msg.mentions.members.first().send('Hey there! If you watch this video, it will teach you everything you need to know and it may answer some other questions you have!\nhttps://www.youtube.com/watch?v=tzXE_MI9ASI')
		client.channels.cache.get('729505227320852520').send(`${msg.mentions.members.first()} has been sent the VR Pirates introuction video.`);
		msg.delete()
	}
	else msg.channel.send("**Beep boop** You forgot to mention someone in your message!\nCommand syntax: `ZAV <@user>`");
}

//READ THE FAQ THINGY
if (msg.content.includes('ZA Read')) {
	if (msg.mentions.members.first()) {
		msg.channel.send(`${msg.mentions.members.first()} Hey there! Please refer to the <#757660028940451900> and this message:\nhttps://canary.discord.com/channels/645713081871106053/757660028940451900/780619599934521365 `);
		msg.delete()
	}
	else msg.channel.send("**Beep boop** You forgot to mention someone in your message!\nCommand syntax: `ZA Read <@user>`");
}

	//COOLDOWN?
if (msg.author.id != '258027565363625984') {
	if (talkedRecently.has(msg.author.id)) {
		return;
	  }
	
	  setTimeout(() => {
		talkedRecently.delete(msg.author.id);
	  }, 120000);
}

	//GAME LIST
	
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
       if (msg.content.includes('Danke')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
  }
       if (msg.content.includes('danke')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
  }
       if (msg.content.includes('DANKE')) {
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
  if (msg.content.includes('six cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
	msg.react('767833292324995125');
  }
  if (msg.content.includes('seven cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
	msg.react('767833292324995125');
	msg.react('767833319412596736');
  }
  if (msg.content.includes('eight cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
	msg.react('767833292324995125');
	msg.react('767833319412596736');
	msg.react('767833338144489482');
  }
  if (msg.content.includes('nine cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
	msg.react('767833292324995125');
	msg.react('767833319412596736');
	msg.react('767833338144489482');
	msg.react('767833358913896449');
  }
  if (msg.content.includes('ten cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
	msg.react('767833292324995125');
	msg.react('767833319412596736');
	msg.react('767833338144489482');
	msg.react('767833358913896449');
	msg.react('767833370334986240');
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
  if (msg.content.includes('6 cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
	msg.react('767833292324995125');
  }
  if (msg.content.includes('7 cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
	msg.react('767833292324995125');
	msg.react('767833319412596736');
  }
  if (msg.content.includes('8 cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
	msg.react('767833292324995125');
	msg.react('767833319412596736');
	msg.react('767833338144489482');
  }
  if (msg.content.includes('9 cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
	msg.react('767833292324995125');
	msg.react('767833319412596736');
	msg.react('767833338144489482');
	msg.react('767833358913896449');
  }
  if (msg.content.includes('10 cookies')) {
	talkedRecently.add(msg.author.id);
	msg.react('758118444091965450');
	msg.react('758118371476111360');
	msg.react('758119221644361731');
	msg.react('758119250396315648');
	msg.react('767833292324995125');
	msg.react('767833319412596736');
	msg.react('767833338144489482');
	msg.react('767833358913896449');
	msg.react('767833370334986240');
  }
    if (msg.content.includes('Good job')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
  }
    if (msg.content.includes('good job')) {
		talkedRecently.add(msg.author.id);
	msg.react('🍪');
 }

 //KD/A
 if (msg.content.includes('ZA K/DA')) {
	msg.channel.send(" <:ahri:786026628312334386> <:kaisa:786026609664196640> <:seraphine:786026641147166721> <:akali:786026634049880124> <:evelynn:786026634011607050>  ");
	}
 if (msg.content.includes('ZA Ahri'))	{
	 msg.channel.send("<:ahri:786026628312334386>");
}	
if (msg.content.includes("ZA Kai'sa"))	{
msg.channel.send("<:kaisa:786026609664196640>");
}
if (msg.content.includes('ZA Seraphine')) {
msg.channel.send("<:seraphine:786026641147166721>");
}
if (msg.content.includes('ZA Akali'))	{
msg.channel.send("<:akali:786026634049880124>");
}
if (msg.content.includes('ZA Evelynn')) {
msg.channel.send("<:evelynn:786026634011607050>");
}

	 //TEST
//if (msg.content.includes("Test")) {
//	msg.channel.send("  It works!  ");
//	}

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
	if (msg.content.includes("t show up")) {
	msg.channel.send("  Please make sure you have ADB drivers installed and developer mode enable on your Quest  ");
	}
	
	//QUEST 2
	if (msg.content.includes('ZA 90')) {
		msg.channel.send("  Hey there! Until Oculus pushes an update, use this to enable 90hz on your Quest 2!\nhttp://bit.ly/42069za  ");
		}
	if (msg.content.includes('ZA List')) {
		msg.channel.send("  https://canary.discordapp.com/channels/645713081871106053/645786760101494815/765895837619453972  ");
		}

	//FAQ QUESTIONS
		//SAFESIDE
	if (msg.content.includes('safeside')) {
	msg.channel.send("  Please do not use SideQuest to sideload external cracked content. Download Rookie Sideloader VRP Edition from https://t.me/VRPirates  ");
	}
	if (msg.content.includes('SAFESIDE')) {
	msg.channel.send("  Please do not use SideQuest to sideload external cracked content. Download Rookie Sideloader VRP Edition from https://t.me/VRPirates ");
	}
	if (msg.content.includes('null')) {
	msg.channel.send("  Please remove the '-' or '.' from the filename and the numbers after it.  ");
	}

		//SIDELOADER
	if (msg.content.includes('get the sideloader')) {
	msg.channel.send("  Download Rookie Sideloader VRP Edition from https://t.me/VRPirates  ");
	}
	if (msg.content.includes('find rookie sideloader again')) {
	msg.channel.send("  Download Rookie Sideloader VRP Edition from https://t.me/VRPirates  ");
	}
	if (msg.content.includes('use the sideloader')) {
	msg.channel.send("  Please refer to this video\n https://canary.discordapp.com/channels/645713081871106053/757660028940451900/757673842847121510  ");
	}
	if (msg.content.includes('use the side loader')) {
	msg.channel.send("  Please refer to this video\n https://canary.discordapp.com/channels/645713081871106053/757660028940451900/757673842847121510  ");
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
	msg.delete();
	msg.channel.send(" https://github.com/nerdunit/androidsideloader/releases  ");
	}
	if (msg.content.includes('lly update')) {
	msg.channel.send(" Yes, the Sideloader will update the games list automatically as soon as we upload them.  ");
	}
	if (msg.content.includes('update auto')) {
	msg.channel.send(" Yes, the Sideloader will update the games list automatically as soon as we upload them.  ");
	}

		//MANUALLY
	if (msg.channel != '645713082588594188' ) {
		if (msg.channel != '721120472787320832' ) {
			if (msg.content.includes('manually')) {
				msg.channel.send("  Trying to sideload the manual way? Look here! <#757660028940451900>! ");
		}
	}
}

		//CANNOT FIND GAMES
	if (msg.content.includes('cannot find the games')) {
	msg.channel.send("  Cannot find the games on your Quest? From your Quest headset, go to Library -> Unknown Sources ");
	}

		//CANNOT FIND HEADSET
	if (msg.content.includes('cannot find headset')) {
	msg.channel.send("  Please make sure developer mode is enabled on the headset, go to settings > developer > Usb connection dialog and enable it, the oculus adb drivers install on your computer, and to accept the prompts in the headset. Still not working? Contact a staff member or read through <#757660028940451900> ");
	}
	if (msg.content.includes('cannot see headset')) {
	msg.channel.send("  Please make sure developer mode is enabled on the headset, go to settings > developer > Usb connection dialog and enable it, the oculus adb drivers install on your computer, and to accept the prompts in the headset. Still not working? Contact a staff member or read through <#757660028940451900> ");
	}
	if (msg.content.includes('headset not detected')) {
	msg.channel.send("  Please make sure developer mode is enabled on the headset, go to settings > developer > Usb connection dialog and enable it, the oculus adb drivers install on your computer, and to accept the prompts in the headset. Still not working? Contact a staff member or read through <#757660028940451900> ");
	}
	if (msg.content.includes('cannot see my headset')) {
	msg.channel.send("  Please make sure developer mode is enabled on the headset, go to settings > developer > Usb connection dialog and enable it, the oculus adb drivers install on your computer, and to accept the prompts in the headset. Still not working? Contact a staff member or read through <#757660028940451900> ");
	}
	if (msg.content.includes('cannot find my headset')) {
	msg.channel.send("  Please make sure developer mode is enabled on the headset, go to settings > developer > Usb connection dialog and enable it, the oculus adb drivers install on your computer, and to accept the prompts in the headset. Still not working? Contact a staff member or read through <#757660028940451900> ");
	}

		//VIRUS
	if (msg.content.includes('malware')) {
		msg.channel.send("  Malware? https://canary.discord.com/channels/645713081871106053/645786760101494815/763264771637510204  ");
		}
	if (msg.content.includes('virus')) {
		msg.channel.send("  Virus? https://canary.discord.com/channels/645713081871106053/645786760101494815/763264771637510204  ");
		}
	if (msg.content.includes('trojan')) {
		msg.channel.send("  Trojan? https://canary.discord.com/channels/645713081871106053/645786760101494815/763264771637510204  ");
		}
	if (msg.content.includes('Update Firewall')) {
		msg.channel.send("  Virus? https://canary.discord.com/channels/645713081871106053/645786760101494815/763264771637510204  ");
		}
	if (msg.content.includes('Update firewall')) {
		msg.channel.send("  Virus? https://canary.discord.com/channels/645713081871106053/645786760101494815/763264771637510204  ");
		}
	if (msg.content.includes('update firewall')) {
		msg.channel.send("  Virus? https://canary.discord.com/channels/645713081871106053/645786760101494815/763264771637510204  ");
		}
	if (msg.content.includes('update Firewall')) {
		msg.channel.send("  Virus? https://canary.discord.com/channels/645713081871106053/645786760101494815/763264771637510204  ");
		}


		//BLACK SCREEN
if (msg.channel != '722909622855401512' ) {
	if (msg.channel != '721120472787320832' ) {
	//if (msg.content.includes('black s')) {
	//msg.channel.send("  Please reinstall the app and check to make sure if it has an obb, it was installed correctly.\n***IF YOU GOT THE GAME FROM THE GOOGLE DRIVE, PLEASE COPY AND PASTE THE FILENAME OF THE OBB HERE FIRST, IF I RESPOND, DO WHAT I SAY***");
	//} 
	if (msg.content.includes('-00')) {
		msg.channel.send("  Please remove the '-' from the filename and everything after it.  ");
		}
	if (msg.content.includes('.00')) {
		msg.channel.send("  Please remove the '.' from the filename and everything after it.  ");
		}
	}
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
	msg.channel.send("  Most patched games do not have working multiplayer. Contractors, Dead & Buried 2, Drunkn Bar Fight, Elven Assassin, Ironlights, Wander, Cookout, Blaston, Sairento, Elaven tennis, Acron, Racket Fury, Death Horizon, Pro Putt, Racket NX, Synth Riders, and Walk About Mini Golf are reported to work, however.  ");
	}
	if (msg.content.includes('ZA MW')) {
	msg.channel.send("  Most patched games do not have working multiplayer. Contractors, Dead & Buried 2, Drunkn Bar Fight, Elven Assassin, Ironlights, Wander, Cookout, Blaston, Sairento, Elaven tennis, Acron, Racket Fury, Death Horizon, Pro Putt, Racket NX, Synth Riders, and Walk About Mini Golf are reported to work, however.  ");
	}
		//VRP GUI
	if (msg.content.includes('VR Pirates GUI')) {
	msg.channel.send("  Hey there! You can get the GUI tool here! ***--> https://t.me/VRPirates/64937***\nMake sure you have Telegram installed to download this file.");
	}
		//BANNED
	if (msg.content.includes('banned ')) {
	msg.channel.send("  There have been no reports of anyone getting banned from pirating or sideloading. But please be careful making alt accounts on Facebook to use on your Quest 2. Facebook is quickly banning these accounts making them unable to use on the Quest 2 and potentially putting your Oculus account in danger. ");
	}
	if (msg.content.includes('ZAB')) {
		msg.channel.send("  There have been no reports of anyone getting banned from pirating or sideloading. But please be careful making alt accounts on Facebook to use on your Quest 2. Facebook is quickly banning these accounts making them unable to use on the Quest 2 and potentially putting your Oculus account in danger. ");
		}
		//DEVELOPER MODE
	if (msg.content.includes('developer m')) {
		msg.channel.send("  Congrats, you are on your way to a wonderful world. Follow this guide to get you started quick! \nhttps://bit.ly/33Sdje2 ");
		}
		//TELEMETRY
	if (msg.content.includes('disable telemetry')) {
	msg.channel.send("  Looking to disable the telemetry? Use this! https://github.com/ZaleAnderson/zalebot/blob/master/Quest_dt.zip?raw=true ");
	}
	if (msg.content.includes('ZA DT')) {
		msg.delete();
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
	if (msg.content.includes('virtual desktop')) {
		if (msg.content.includes('free')) {
	msg.channel.send("  There is no apk or for free Virtual Desktop or anyway to get it for free.  ");
		}
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
	msg.channel.send("   Use BMBF for that. If this did not help, please refer to <#721121331130925176> ");
	}
	if (msg.content.includes('mod Beat Saber')) {
	msg.channel.send("    Use BMBF for that. If this did not help, please refer to <#721121331130925176> ");
	}
	if (msg.content.includes('mod Beat saber')) {
	msg.channel.send("    Use BMBF for that. If this did not help, please refer to <#721121331130925176> ");
	}
	if (msg.content.includes('mod Beatsaber')) {
	msg.channel.send("    Use BMBF for that. If this did not help, please refer to <#721121331130925176> ");
	}
	if (msg.content.includes('mod beatsaber')) {
	msg.channel.send("   Use BMBF for that. If this did not help, please refer to <#721121331130925176> ");
	}
	if (msg.content.includes('eat')) {
		if (msg.content.includes('aber')) {
			if (msg.content.includes('custom song')) {
				msg.channel.send(" ***THIS WORKS ON CRACKED BEAT SABER ***   Trying to install more songs for more Beat Saber fun? Use BMBF for that! If this did not help, please refer to <#721121331130925176> ");
			}
		}
	}
	if (msg.content.includes('ZA BMBF')) {
	msg.channel.send("  Get ready to have lots of fun in Beat Saber with BMBF! Here is a website to help get you started!\nhttps://bsaber.com/oculus-quest-custom-songs/ ");
	}
	
	//UPDATE GAME
	if (msg.content.includes('pdate')) {
		if (msg.content.includes('ame')) {
			msg.channel.send(" Trying to update a game from an old version? With almost all games, you can just install the new version without doing anything. Yeah that's right, you don't have to do anything but install the new version. But it is always a good idea to ***GOOGLE*** where the games saves are stored and back those up just in case. Happy gaming!  ");
		}
	}

		//NOTIFI VR
	if (msg.content.includes('phone notification')) {
	msg.channel.send("  Looking for a way to get your phone's notifications on your **original** Quest? Try this app me and a buddy developed. Join the Discord to get started. \n  https://discord.gg/BsKfdHW");
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
	if (msg.content.toLowerCase() === 'vrp discord') {
	msg.channel.send("  https://discord.gg/VRPirates  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.toLowerCase() === 'test discord') {
	msg.channel.send("  https://discord.gg/SeFHWZ9  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.toLowerCase() === 'sq discord') {
	msg.channel.send("  https://discord.com/invite/sidequest  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.toLowerCase() === 'bsmg discord') {
	msg.channel.send("  https://discord.gg/beatsabermods  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.toLowerCase() === 'qh discord') {
	msg.channel.send("  https://discord.gg/VXZrQ7t  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.toLowerCase() === 'qos discord') {
	msg.channel.send("  https://discord.gg/MEBVngG  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.toLowerCase() === 'qb discord') {
	msg.channel.send("  https://discord.gg/d6DyW9v  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.toLowerCase() === 'nvr discord') {
	msg.channel.send("  https://discord.gg/BsKfdHW  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.toLowerCase() === 'vd discord') {
	msg.channel.send("  https://discord.com/invite/6rYepzg  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.toLowerCase() === 'bmbft discord') {
	msg.channel.send("  https://discord.gg/9VXgpBe  ");
	talkedRecently.add(msg.author.id);
	msg.delete()
	}
	if (msg.content.includes('delete this')) {
	msg.delete()
	}
	if (msg.content.includes('that was easy')) {
		msg.channel.send("  https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/marketing_agency_charlotte-2.png  ");
		}



	//TOOLS
		//STAFF ONLY
//if (msg.author.id == '258027565363625984') {
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
//}

		//ICONS
	if (msg.content.includes('ZA Icons')) {
		msg.delete();
		talkedRecently.add(msg.author.id);
	msg.author.send("https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/Logo.png\nhttps://raw.githubusercontent.com/ZaleAnderson/zalebot/master/Comp-1-4.gif\nhttps://raw.githubusercontent.com/ZaleAnderson/zalebot/master/Comp-1-3.gif\nhttps://raw.githubusercontent.com/ZaleAnderson/zalebot/master/9a38967ad80a7806540bb08694845aba.png\nhttps://raw.githubusercontent.com/ZaleAnderson/zalebot/master/VRPHalloween.gif");
	}
	
		//PURGE TEST
	if (msg.content == "ZA Clear") {
		if (message.member.hasPermission("MANAGE_MESSAGES")) {
			message.channel.fetchMessages()
				.then(function(list){
					message.channel.bulkDelete(list);
				}, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
			}
		}
	
		//A FILE
	if (msg.content.includes('ZA File')) {
		msg.delete()
		msg.channel.send("");
		}

		//VERSION
	if (msg.content.includes('ZA Version')) {
		talkedRecently.add(msg.author.id);
		msg.delete()
	msg.channel.send(`This bot's version is Build 263`);
	}

		//PING
	if (msg.content.includes('ZA Ping')) {
		talkedRecently.add(msg.author.id);
		msg.delete()
		const d = new Date();
		date = d.getHours() + ":" + d.getMinutes() + " EST " + d.toDateString();
		msg.channel.send('Your ping is `' + `${msg.createdTimestamp - Date.now()}` / 5 + ' ms`');
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
	msg.channel.send(`This bot's version is Build 263`);
	const d = new Date();
		date = d.getHours() + ":" + d.getMinutes() + " EST " + d.toDateString();
		msg.channel.send('Bot ping is `' + `${Date.now() - msg.createdTimestamp}` / 5 + ' ms`');
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
		var seclTime = (difDate - 14400000);
		var secTime = Math.trunc(seclTime / 1000);
		var downTime = Math.trunc(leftTime);
		var gifPost = 0;
		msg.delete()
		msg.author.send((`***${downTime}***` + '  days until Quest 2'));
		if (msg.author.id == '258027565363625984') {
			msg.channel.send(`${leftTime}` + ' days left until Oct. 13');
			msg.channel.send(`${gifPost}` + ' times Oct. 13 has been passed');
			msg.channel.send(`${secTime}` + ' seconds left until Oct. 13');
		}
	}


	//STATUS
	if (msg.content.includes('ZA Loop')) { 
		
   }
//	if (msg.content.includes('')) {
//		client.user.setActivity(`${downTime}` + ' hours until Quest 2', {
//		type: "STREAMING",
//  		url: "https://www.youtube.com/watch?v=-PcclLPPoyc"
//	})
//		}
	
	
	


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
	"name": "**VD Discord**",
	"value": "Gives Virtual Desktop Discord link"
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
		"name": "**pink/october/cancer/breast**",
		"value": "reacts with pink ribbon emoji"
	  },
	  {
		"name": "**good zale bot**",
		"value": "Cookie reaction & Beep boop YAAAAY"
	  },
	  {
		"name": "**virus/malware**",
		"value": "Hey there! Rookie's Sideloader is not and does not contain a V I R U S (beep boop). This program is not going to harm your devices in any way. Windows defender is the main program blocking the sideloader from running and makes it delete. If you would like to allow Rookie's Sideloader through Windows defender, please reply **'Bypass firewall'** or if you would like to disable Windows Defender completely, please reply **'Disable firewall'"
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
  const embed3 = {
	"color": 16711777,
"footer": {
"icon_url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true",
"text": "© 2020 Zale Anderson || DM 01001000"
},
"thumbnail": {
"url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true"
},
"author": {
"name": "Zale Bot",
"url": "https://discordapp.com",
"icon_url": "https://github.com/ZaleAnderson/zalebot/blob/master/pfp.png?raw=true"
},
"fields": [
{
  "name": "***How to bypass google drive limit***",
  "value": "========================"
},
{
	"name": "**1**",
	"value": "Create an empty folder with whatever name on one of your drives, there's no size limit, so don't bother checking for free space. "
},
{
  "name": "**2**",
  "value": " Click on the link in question and on the Google page check the symbols on the top bar for the one that says 'Create shortcut'."
},
{
	"name": "**3**",
	"value": "Click this button and navigate to the empty folder you just made, then let Google create the shortcut right in this folder "
},
{
  "name": "**4**",
  "value": "Go back to your drive with the new folder with shortcut inside and download the folder - GDrive will start zipping the folder AND the file that corresponds to the shortcut. "
},
{
  "name": "***5***",
  "value": "‎Wait until the zipping process has finished (this can take a pretty long time, one or more hours for very large files), then just download the archive the usual way "
},
{
  "name": "***6***",
  "value": "After the download has finished restore the original filename, especially if the file is part of a multi-part archive, as GDrive (often/always) adds some number extension to it. Done!‎"
},
{
  "name": "***Any sentence that contains: who, what, when, where, how, why, Zale, @ , or an attachment is automatically logged to help improve the bot.***",
  "value": "‎"
}
]
};
const embed4 = {
	"color": 16711777,
"footer": {
"icon_url": "https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/Logo.png",
"text": "© 2020 Zale Anderson || DM OPEN"
},
"thumbnail": {
"url": "https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/pfpChristmas.png"
},
"fields": [
{
  "name": "***Looking for the compatibility list or trying to see what games and upcoming games are on the sideloader? Look at these links!***",
  "value": "‎"
},
{
  "name": "***Quest 2 Game Compatibility List***",
  "value": `https://docs.google.com/spreadsheets/d/18E7BlXqLcSuO0bImwSf3bCOfzq_ugL8uhEAe4Jz9bt8/edit?usp=sharing‎`
},
{
  "name": "***Sideloader Game List***",
  "value": `https://docs.google.com/spreadsheets/d/1oR6OmWpXdzCva6dLGwUgbzYTD_BKls260aqGxbFvQ3s/edit?usp=sharing‎`
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

	if (msg.content.includes('ZA em4')) {
		msg.author.send({ embed:embed4 });
		msg.delete()
	}
	

	//POST IN A SPECIFIC CHANNEL
if (msg.author.id == '258027565363625984') {
	if (msg.content.includes('ZAPIA')) {
		client.channels.cache.get('791141404889055303').send( `Please only click the reaction once and wait for your ticket channel to be created! You will be mentioned in the new channel when it is made and a staff member will assist you as soon as possible. If you spam the reaction, you will lose the privilege to make tickets. Thank you.`);   
		msg.delete()
		}
	}

		//GOOGLE DRIVE
//	if (msg.content.includes('ownload quota')) {
//		msg.channel.send({ embed:embed3 });
//	}
//	if (msg.content.includes('DOWNLOAD QUOTA')) {
//	msg.channel.send({ embed:embed3 });
//	}
	if (msg.content.includes('ZA Em4')) {
		msg.channel.send({ embed:embed4 });
		}

	//LOGGING
	if (msg.author.id != '742576219735719957') {
	if (msg.attachments.size>0)
      {
		const fs = require('fs');
          var json = JSON.stringify(msg.attachments);
          json += ',\n';
          fs.appendFile('attachments.txt', json, function (err) {
          if (err) throw err;
          });
	  }
	  if (msg.content.includes('What'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('what'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('When'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('when'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('Why'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('why'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('Which'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('which'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('Who'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('who'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('How'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('how'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('Where'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('where'))
      {
		const fs = require('fs');
		fs.appendFile('questions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('Zale'))
      {
          const fs = require('fs');
		  fs.appendFile('name.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
			if (err) throw err;
		  });
	  }
	  if (msg.content.includes('zale'))
      {
		const fs = require('fs');
		fs.appendFile('name.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	  if (msg.content.includes('@'))
      {
		const fs = require('fs');
		fs.appendFile('mentions.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
		  if (err) throw err;
		});
	  }
	}
	if (msg.content.includes('')) {
		if (msg.channel.type == "dm") {
			client.users.cache.get('258027565363625984').send(msg.content + " || " + "<@" + msg.author + ">");
			{
				const fs = require('fs');
				fs.appendFile('dms.txt', msg.content + " || " + "<@" + msg.author + ">" + '\n', (err) => {
				  if (err) throw err;
				});
				
			  }
		}
	}

	//SECRETS - HIDDEN ON GITHUB
	if (msg.content.includes('01001001')) { //BrainFuck
	msg.author.send("  https://copy.sh/brainfuck/ ");
	}
	if (msg.content.includes('01001000')) { //Hint
	msg.author.send("  https://raw.githubusercontent.com/ZaleAnderson/zalebot/master/UTF8-Table-7802.png ");
	msg.author.send("  A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z ");
	}
	if (msg.content.includes('01011010')) { //Zale
	msg.author.send("  You really think I would give an easter egg to myself? ");
	}
	if (msg.content.includes('01000011')) { //Chloe
	msg.author.send("  https://pastebin.com/cbi5NZ29 ");
	}
	if (msg.content.includes('01010011')) { //Sanja
	msg.author.send("  https://pastebin.com/QCJ8DM92 ");
	msg.author.send("  https://github.com/ZaleAnderson/zalebot/blob/master/Sanja.zip?raw=true ");
	}
	if (msg.content.includes('01000110')) { //Flow
	msg.author.send("  Man girl, you have some big goals an crazy thing is, it seems you have no problem with that. That's such an amazing thing and you totally got this. I really hope you stick with what you are doing and someday see your name at some big companies. ");
	}
	if (msg.content.includes('01010000')) { //Pmow
	msg.author.send(" Pmow dude, thanks for keeping us sane lol  ");
	}
	if (msg.content.includes('01001101')) { //Moana
	msg.channel.send("  Zale has been notified you found this. His past is involved with this secret code. ");
	client.users.cache.get('258027565363625984').send('Someone has found a the Moana secret code. It is time you send this to her.');
	msg.author.send("  https://pastebin.com/A7g8SqT3 ");
	}
	if (msg.content.includes('01000100')) { //Meredith
	msg.author.send(" https://pastebin.com/jAPFTkEj  ");
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
	if (msg.content.includes('ZA Birb')) {
	msg.channel.send("<a:orangebirdportal:770512827504787457>");
	msg.channel.send("<a:bluebirdportal:770512793454510100>");
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

	//FUN CHAT STUFF
	if (msg.content.includes('ZAClap')) {
		msg.channel.send(msg.content.replace("ZAClap"," "," ",'👏'))
		msg.delete()
	}


	//FAKE TALK				//ZALE
	if (msg.author.id == '258027565363625984') {
		if (msg.content.includes('ZACopy')) {
			msg.channel.send(msg.content.replace('ZACopy',''))
			msg.delete()
		}
	}
							//NOTNEM
	if (msg.author.id == '428659951175467010') {
		if (msg.content.includes('ZACopy')) {
			msg.channel.send(msg.content.replace('ZACopy',''))
			msg.delete()
		}
	}
							//PBOI
	if (msg.author.id == '472331824920657940') {
		if (msg.content.includes('ZACopy')) {
			msg.channel.send(msg.content.replace('ZACopy',''))
			msg.delete()
		}
	}
							//JIB
	if (msg.author.id == '663587440929538058') {
		if (msg.content.includes('ZACopy')) {
			msg.channel.send(msg.content.replace('ZACopy',''))
			msg.delete()
		}
	}
							//FLOW
	if (msg.author.id == '196712556880986113') {
		if (msg.content.includes('ZACopy')) {
			msg.channel.send(msg.content.replace('ZACopy',''))
			msg.delete()
		}
	}
							//SOUP
	if (msg.author.id == '386971274594746388') {
		if (msg.content.includes('ZACopy')) {
			msg.channel.send(msg.content.replace('ZACopy',''))
			msg.delete()
		}
	}
//THANK YOU (LOCALIZATION)


}
}
}
}
});//REMOVE A PARA
//LOGIN TOKEN
client.login('NzQyNTc2MjE5NzM1NzE5OTU3.XzIH_w.Z2aCyLAyx6vMRbVIQPbNNFI8YUY');