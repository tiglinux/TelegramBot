//Code by : Tiago Ribeiro Santos - 23/10/2019
// Language : Node.JS
/*
    Notes: O bot do Telegram deve enviar uma msg com photo para cada user que entra no grupo.
    Não deve repetir mais de uma vez as boas vindas.
*/

//Import a node Telegram API bot
const TelegramBot = require('node-telegram-bot-api');
const token = '1034674785:AAHcNLQIj0X-lJqIKJL4HjOaOOSqs3ooRW8';
const options = {
    polling: true
}
const robot = new TelegramBot(token, options);
/*
robot.on('message',(msg) => {
if(msg.new_chat_members != undefined){
    console.log(robot.sendMessage(msg.new_chat_members.id));
}

});
robot.on

robot.on('channel_chat_created', (msg) => {
 
});
*/
// Listen for any kind of message. There are different kinds of
// messages. Bot ouve qualquer tipo de msg..

robot.on('message', (msg) => {
    //Caso algum usuário diga oi no grupo , o bot responde.
    //Convert msg  to string.
    let usuario = msg.from.first_name;
    if (msg.chat.id) {
        //Send a mensage to the chat.
        //robot.sendMessage(msg.chat.id,'Seja bem vindo!');
        //
        if (usuario.charAt(usuario.length - 1) == 'o' || usuario.charAt(usuario.length - 1) == 'O') {
            robot.sendMessage(msg.chat.id, `Seja Bem Vindo,${msg.from.first_name}! :)`);
            robot.sendPhoto(msg.chat.id, `${__dirname}/img/BoasVindas.jpg`);
        } else {
            if (usuario.charAt(usuario.length - 1) == 'a' || usuario.charAt(usuario.length - 1) == 'A') {
                robot.sendMessage(msg.chat.id, `Seja Bem Vinda,${msg.from.first_name}! :)`);
                robot.sendPhoto(msg.chat.id, `${__dirname}/img/BoasVindas.jpg`);
            }
        }

    }
});

