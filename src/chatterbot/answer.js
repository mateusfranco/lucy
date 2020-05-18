const {CLIENT} = require('../config/constants')

const replyMessage = () => {
  const name = 'lucy';

  CLIENT.on('message', message => {
    if (message.content.toLowerCase().includes(name)) {
      message.reply("ola");
    }
  });
};

const trainWithNewMessages = () => {
  
}

module.exports = {replyMessage}