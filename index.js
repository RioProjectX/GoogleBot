const { Telegraf } = require("telegraf");
const axios = require('axios')

const n = new Telegraf('1933921586:AAEL0ow9Vpjho3O-t6XHCV35oEJlqRCm10s')

n.command('start', (ctx) => {
  ctx.reply('Hai '+ctx.from.first_name+' Silahkan Ketik Kata Yang Mau Kamu Cari')

n.on('message', (ctx) => { `  `
    let input = ctx.message.text;
    axios.get('https://google-api.xlaaf.repl.co/search?q='+input)
    .then(res => {
         console.log(res);
         ctx.reply(`Ditemukan : ${input}\n${res.data.title}\nUrl: ${res.data.link}\nDeskripsi: ${res.data.desk}`)
       })
    }).catch(e => {
         console.log(e);
   })
})

n.launch()