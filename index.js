const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Добро пожаловать!'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('Список вопросов', (ctx) => ctx.reply('Вопрос 1\nВопрос 2\nВопрос 3\nВопрос 4'))
bot.hears('Вопрос 1', (ctx) => ctx.reply('Ответ на вопрос 1'))
bot.hears('Вопрос 2', (ctx) => ctx.reply('Ответ на вопрос 2'))
bot.hears('Вопрос 3', (ctx) => ctx.reply('Ответ на вопрос 3'))
bot.hears('Вопрос 4', (ctx) => ctx.reply('Ответ на вопрос 4'))
bot.startPolling()
