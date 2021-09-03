const { Telegraf } = require("telegraf");
const axios = require('axios')

const n = new Telegraf(process.env.token)

n.command('start', (ctx) => {
  ctx.reply('Hai '+ctx.from.first_name+' Saya Adalah Google Bot Bisa Mencari Dengan Mudah Dan Cepat , Saya Di Buat Oleh @Riio00 ,Silahkan Ketik Kata Yang Mau Kamu Cari')

n.on('message', (ctx) => { `  `
    let input = ctx.message.text;
    axios.get('https://google-api.xlaaf.repl.co/search?q='+input)
    .then(res => {
         const me = res.data.data
         const hai = me[Math.floor(Math.random() * (me.length))] 
         const judul = hai.title
         const link = hai.link
         const desk = hai.desk
         ctx.reply(`Ditemukan : ${input}\n${judul}\nUrl: ${link}\nDeskripsi: ${desk}`)
       })
    }).catch(e => {
         console.log(e);
   })
})

n.launch()
