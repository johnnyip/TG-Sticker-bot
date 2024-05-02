// const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');

// Replace YOUR_TOKEN_HERE with your actual bot token
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });


// Handle text messages
bot.on('message', (msg) => {
    // bot.sendMessage(msg.chat.id, 'You said: ' + msg.text);
    console.log("msg: "+msg.text +", chatId: "+msg.chat.id);
  });

// Handle /start command
bot.onText(/\/start/, (msg) => {
    // bot.sendMessage(msg.chat.id, 'Click to get the TG sticker download link\n  [Link](google.com)', options);

    

    bot.sendMessage(msg.chat.id, `
[Telegram Machiko1](https://t.me/addstickers/Machiko_1_by_johnnyip_stickerbot)

[Telegram Machiko2](https://t.me/addstickers/Machiko_2_by_johnnyip_stickerbot)

[Telegram Machiko3](https://t.me/addstickers/Machiko_3_by_johnnyip_stickerbot)

[Telegram Machiko4](https://t.me/addstickers/Machiko_4_by_johnnyip_stickerbot)

[Telegram Machiko5](https://t.me/addstickers/Machiko_5_by_johnnyip_stickerbot)

[Telegram Machiko6](https://t.me/addstickers/Machiko_6_by_johnnyip_stickerbot)

[Telegram Machiko7](https://t.me/addstickers/Machiko_7_by_johnnyip_stickerbot)

[Telegram Machiko8](https://t.me/addstickers/Machiko_8_by_johnnyip_stickerbot)

[Telegram Machiko9](https://t.me/addstickers/Machiko_9_by_johnnyip_stickerbot)

[Telegram Machiko10](https://t.me/addstickers/Machiko_10_by_johnnyip_stickerbot)



[Telegram Machiko11](https://t.me/addstickers/Machiko_11_by_johnnyip_stickerbot)

[Telegram Machiko12](https://t.me/addstickers/Machiko_12_by_johnnyip_stickerbot)

[Telegram Machiko13](https://t.me/addstickers/Machiko_13_by_johnnyip_stickerbot)

[Telegram Machiko14](https://t.me/addstickers/Machiko_14_by_johnnyip_stickerbot)

[Telegram Machiko15](https://t.me/addstickers/Machiko_15_by_johnnyip_stickerbot)

[Telegram Machiko16](https://t.me/addstickers/Machiko_16_by_johnnyip_stickerbot)

[Telegram Machiko17](https://t.me/addstickers/Machiko_17_by_johnnyip_stickerbot)

[Telegram Machiko18](https://t.me/addstickers/Machiko_18_by_johnnyip_stickerbot)

[Telegram Machiko19](https://t.me/addstickers/Machiko_19_by_johnnyip_stickerbot)

[Telegram Machiko20](https://t.me/addstickers/Machiko_20_by_johnnyip_stickerbot)


[Telegram Machiko21](https://t.me/addstickers/Machiko_21_by_johnnyip_stickerbot)

[Telegram Machiko22](https://t.me/addstickers/Machiko_22_by_johnnyip_stickerbot)

[Telegram Machiko23](https://t.me/addstickers/Machiko_23_by_johnnyip_stickerbot)

[Telegram Machiko24](https://t.me/addstickers/Machiko_24_by_johnnyip_stickerbot)

[Telegram Machiko25](https://t.me/addstickers/Machiko_25_by_johnnyip_stickerbot)

[Telegram Machiko26](https://t.me/addstickers/Machiko_26_by_johnnyip_stickerbot)

[Telegram Machiko27](https://t.me/addstickers/Machiko_27_by_johnnyip_stickerbot)

[Telegram Machiko28](https://t.me/addstickers/Machiko_28_by_johnnyip_stickerbot)

[Telegram Machiko29](https://t.me/addstickers/Machiko_29_by_johnnyip_stickerbot)

[Telegram Machiko30](https://t.me/addstickers/Machiko30_by_johnnyip_stickerbot)



[Telegram Machiko31](https://t.me/addstickers/Machiko31_by_johnnyip_stickerbot)

[Telegram Machiko32 (coming soon)](https://t.me/addstickers/Machiko32_by_johnnyip_stickerbot)

`, { parse_mode: 'MarkdownV2' });

});



