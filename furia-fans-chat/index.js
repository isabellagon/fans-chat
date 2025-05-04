const TelegramBot = require('node-telegram-bot-api');
const token = 'SEU_TOKEN_DO_TELEGRAM'; // Substitua pelo token do BotFather
const bot = new TelegramBot(token, { polling: true });

const comandos = {
  '/start': 'Bem-vindo ao FURIA Fans Chat! Digite /menu para ver as opções.',
  '/menu': 'Comandos disponíveis:\n/grito - Grito de guerra\n/provoca - Provocar rival\n/jogo - Status do próximo jogo\n/mvp - Vote no MVP do último jogo',
  '/grito': '🔥 VAMO FURIAAAAA! RUMO AO TOP 1! 🔥',
  '/provoca': 'Os rivais tremem quando escutam FURIA no servidor. 🐍',
  '/jogo': 'Próximo jogo: FURIA x NAVI - 06/05 às 16h - ESL Pro League',
  '/mvp': 'Vote no MVP: Responda com o número\n1. KSCERATO\n2. yuurih\n3. FalleN\n4. chelo\n5. arT'
};

bot.onText(/\/(start|menu|grito|provoca|jogo|mvp)/, (msg, match) => {
  const chatId = msg.chat.id;
  const comando = match[0];
  bot.sendMessage(chatId, comandos[comando]);
});

bot.on('message', (msg) => {
  const texto = msg.text?.trim();
  if (/^[1-5]$/.test(texto)) {
    bot.sendMessage(msg.chat.id, `✅ Obrigado por votar! Seu voto foi computado para o jogador ${texto}.`);
  }
});
