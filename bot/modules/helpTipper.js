'use strict';
let config = require('config');
let spkFee = config.get('spk').paytxfee;
let prefix = config.get('bot').prefix;
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**:bank: Coins :bank:**__\n' +
      '  **SparksPay (SPK) Tipper**\n    Transaction Fees: **' + spkFee + '**\n' +      
      '__**Commands**__\n' +
      '  **' + prefix + 'tipspk** : Displays This Message\n' +
      '  **' + prefix + 'tipspk balance** : get your balance\n' +
      '  **' + prefix + 'tipspk deposit** : get address for your deposits\n' +
      '  **' + prefix + 'tipspk withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **' + prefix + 'tipspk <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **' + prefix + 'tipspk private <user> <amount>** : put private before Mentioning a user to tip them privately\n' +
      '**<> : Replace carrot <> symbol with appropriate value.**\n' +
      '__**Examples**__\n' +
      '  **' + prefix + 'tipspk @zaWasp 10**\n' +
      '  **' + prefix + 'tipspk withdraw SPKaddressHERE 10**\n' +
      '  **' + prefix + 'tipspk private @zaWasp 10**\n' +
      '  **' + prefix + 'tipspk balance**\n' +
      '  **' + prefix + 'tipspk deposit**\n'
    );
  }
};
