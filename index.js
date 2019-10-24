//Code by : Tiago Ribeiro Santos - 23/10/2019
// Language : Node.JS
/*
    Notes: O bot do Telegram deve enviar uma msg com photo para cada user que entra no grupo.
    Não deve repetir mais de uma vez as boas vindas.


*/

//Import a node Telegram bot
const TelegramBot = require('node-telegram-bot-api');
const token = '1034674785:AAEDuQSekIBtByelUgHj7eSN_FJjKzD4_XM';
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
//Boas vindas
robot.on('message', (msg) => {
    //Caso algum usuário diga oi no grupo , o bot responde.
    //Convert msg  to string.
    let usuario = msg.from.first_name;
    if (msg.chat.id) {
        //bot.sendMessage(msg.chat.id,`Olá,seja bem vindo! :) :${msg.from.first_name}`);
        //robot.sendPhoto(msg.chat.id, 'img/BoasVindas.jpg');
        robot.sendPhoto(msg.chat.id, 'img/BoasVindas.jpg');
        if(usuario.charAt(usuario.length-1) == 'o' || usuario.charAt(usuario.length-1) == 'O'){
            robot.sendMessage(msg.chat.id, `Seja Bem Vindo,${msg.from.first_name}! :)`); 
        }else{
            if(usuario.charAt(usuario.length-1) == 'a' || usuario.charAt(usuario.length-1) == 'A'){
                robot.sendMessage(msg.chat.id, `Seja Bem Vinda,${msg.from.first_name}! :)`); 
            }
        }
        

    }
});


