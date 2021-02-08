
const env = require('./.env')
const Telegraf = require('telegraf')
//const {Menu, MenuMid} = require('telegraf-inline-menu')

//iniciando bot
const bot = new Telegraf(env.token)
/*
bot.start(content => {
    const from = content.update.message.from
    //mostrar no OUTPUT o que o from traz
    //console.log(from)
    content.reply(`Muito Bem-Vindo ${from.first_name} ${from.last_name}!`)
})

//Mostra sempre esta mensagem ai digitar qualquer texto. 
//bot.on('text', (content, next) => {
  //  const dia = new Date;
   // content.reply("Olá, sou Bot Tazmania")
   //Mostra dia mes e ano
   // content.reply(`${dia.getDate()}/${dia.getMonth()}/${dia.getFullYear()}`)
   // next()
//}) 

bot.on('message', content => {
    const texto = content.update.message.text
    //texto = texto.toUpperCase()
    //console.log(texto.toUpperCase())
    
    if(texto.toUpperCase().match(/BOM DIA/)){
        content.reply("Olá Bom Dia pra vc tb!!")
    }
    if(texto.toUpperCase().match(/BOA TARDE/)){
        content.reply("Olá Boa Tarde pra vc tb!!")
    }
    if(texto.toUpperCase().match(/BOA NOITE/)){
        content.reply("Olá Boa Noite pra vc tb!!")
    }
    
})

//Executar um comando no caso aqui é o /Teste
bot.command('Teste', (content, next) => {
    content.reply('Comando Teste Rodando!!!!')  

})

bot.startPolling() */