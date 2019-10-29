//Code by : Tiago Ribeiro Santos - 23/10/2019
// Language : Node.JS
// TELEGRAM BOT.
/*
    Notes: O bot do Telegram deve enviar uma msg com photo para cada user que entra no grupo.
    Não deve repetir mais de uma vez as boas vindas.kickar também
*/
//robot.on() recebe todas as mensagens  que o usuário manda.

//Import a node Telegram API bot Administrator...
const TelegramBot = require('node-telegram-bot-api');
//Api para escutar got.
var moment = require('moment'); //Relógio
var got = require('got'); //Usado para solicitações web (requests)
const token = '1034674785:AAHcNLQIj0X-lJqIKJL4HjOaOOSqs3ooRW8';
const options = {
    polling: true
}
//Robot Telegram Bot
const robot = new TelegramBot(token, options);

//User Function. Fornece informações sobre o usuário..
function telegramUser() {
    this.telegram_id = 0;
    this.telegram_username = null;
    this.telegram_firstname = null;
    this.telegram_lastname = null;
    this.some_array = [];
    this.some_other_array = []; //yes you can store arrays in objects
    this.store_some_message = null;
}
//Coloca todos os objetos do usuário em uma matriz..(User)
var user_array = [];
//novo objeto telegram_user() , objeto do user.
user_array.push(new telegram_user());

//Function para autenticação de usuários via ID.
function authUser(telegram_id) {
    //Insere todos os usuários no array de Users.
    for (let i = 1; i < user_array.length; i += 1) {
        //Verifica se a posição do usuário no array é igual ao id do usuário no telegram e retorna a posição do user.
        if (user_array[i].telegram_id == telegram_id) {
            return i;

        }
    }
}


//New members - Welcome ;) - Boas vindas.
robot.on('new_chat_members', (msg) => {
    //Chat informations in Json
    console.log('msg', msg);
    //Chat ID;
    const chatId = msg.chat.id;
    //New Chat FirstName Member.
    const firstName = msg.new_chat_member.first_name;
    //Welcome msg for new users inbox.

    //Verifica se o usuário é bot ou robô...
    if (msg.new_chat_member.is_bot == false) {
        if (firstName.lastIndexOf('o') || firstName.lastIndexOf('O')) {
            robot.sendMessage(chatId, `Seja Bem Vindo,"${firstName.toUpperCase()}"! :)`);
            //robot.sendPhoto(chatId, `${__dirname}/img/BoasVindas.jpg`);
        }
        else if (firstName.lastIndexOf('a') || firstName.lastIndexOf('A')) {
            robot.sendMessage(chatId, `Seja Bem Vinda,"${firstName.toUpperCase()}"!`);
            //robot.sendPhoto(chatId, `${__dirname}/img/BoasVindas.jpg`);
        }
    } else {
        if (msg.new_chat_member.is_bot == true) {
            robot.sendMessage(chatId, `Você é um BOT no grupo,"${firstName.toUpperCase()}" '=\'`);
            return 0;
        }
    }

});
//Users left in the group chat. sairam..
robot.on('left_chat_member', (msg) => {
    const chatId = msg.chat.id;
    const userOut = msg.left_chat_member.first_name;
    robot.sendMessage(chatId, `Foi um prazer,você aqui : "${userOut.toUpperCase()}" no grupo.Volte sempre! ;)`);
});
//method para responder usuários no privado.(Falta) quando um usuário novo entra.
robot.on('message', (msg) => {
    //Set Chat  title.
    robot.setChatTitle(chatId, 'Eu Saudável - 5S Group');
    //From user ID; // parse -> conversão da msg para ASCII..
    const Name = msg.from.first_name;
    const fromId = ;


    //robot.sendMessage(fromId, "Seja bem vindo!", { parse_mode: 'HTML' });
    return 0; // Returns vazio.
});