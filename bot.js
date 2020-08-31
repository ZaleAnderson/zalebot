//BOT LINK https://discord.com/oauth2/authorize?client_id=742576219735719957&scope=bot&permissions=104270920
const Discord = require('discord.js');
const client = new Discord.Client();
//START COMMANDS
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Cookie Baking", {
  type: "STREAMING",
  url: "https://www.youtube.com/watch?v=-PcclLPPoyc"
})
})

client.on('message', msg => {
	//THANKS
  if (msg.content.includes('thanks')) {
    msg.channel.send("Give this cookie to the person who helped you!")
	msg.channel.send('🍪');
  }
    if (msg.content.includes('Thanks')) {
    msg.channel.send("Give this cookie to the person who helped you!")
	msg.channel.send('🍪');
  }
    if (msg.content.includes('thank you')) {
    msg.channel.send("Give this cookie to the person you're thanking!")
  }
      if (msg.content.includes('Thank you')) {
    msg.channel.send("Give this cookie to the person you're thanking!")
  }
    if (msg.content.includes('thank')) {
	msg.react('🍪');
  }
      if (msg.content.includes('Thank')) {
	msg.react('🍪');
  }
  //COOKIES
    if (msg.content.includes('cookie')) {
	msg.react('🍪');
  }
      if (msg.content.includes('Cookie')) {
	msg.react('🍪');
  }
  //FAQ
	if (msg.content.includes('find apks')) {
	msg.channel.send("⚠️ Please read the faq ⚠️");
	}
	if (msg.content.includes('get apks')) {
	msg.channel.send("⚠️ Please read the faq ⚠️");
	}
	if (msg.content.includes('help me')) {
	msg.channel.send("⚠️ Please read the faq before asking for help ⚠️");
	}
	if (msg.content.includes('Help me')) {
	msg.channel.send("⚠️ Please read the faq before asking for help ⚠️");
	}
	if (msg.content.includes('find games')) {
	msg.channel.send("⚠️ Please read the faq ⚠️");
	}
	if (msg.content.includes('get games')) {
	msg.channel.send("⚠️ Please read the faq ⚠️");
	}
	//RANDOM
		if (msg.content.includes('bepis')) {
	msg.channel.send("https://github.com/ZaleAnderson/zalebot/blob/master/ezgif.com-optimize.gif?raw=true");
	}
		if (msg.content.includes('Bepis')) {
	msg.channel.send("https://github.com/ZaleAnderson/zalebot/blob/master/ezgif.com-optimize.gif?raw=true");
	}
	//DONATION
	if (msg.content.toLowerCase() === 'za donate') {
	msg.channel.send("https://www.paypal.com/paypalme/ZaleAnderson");
	}
});
//LOGIN TOKEN
client.login('NzQyNTc2MjE5NzM1NzE5OTU3.XzIH_w.6b0dDGY0sBt1nGaLQGvCm1QwbTg');