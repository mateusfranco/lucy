const constants = require('./config/constants');
const {CLIENT, TOKEN} = constants;
const {Chatterbot} = require('./chatterbot/index');

CLIENT.on('ready', () => {
  console.log(`Logged in as ${CLIENT.user.tag}!`);
});

Chatterbot.replyMessage();


CLIENT.login(TOKEN);