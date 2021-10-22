const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://telegra.ph/file/1f40c8fab2450d5279858.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Amal*
*To check update .update   To update Bot .update now*

*Bot created by : https://t.me/aspirer2*

*Deploy your own AspirerX: _________(password on this video watch it full)*

*Support group : https://t.me/KayAspirerProject*

*Hosted  : Heroku.com*
`}) 

}));
