/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: phoneSendText
 *
 * Bloq type: Statement
 *
 * Description: It sends a message to mobile by bluetooth
 *
 * Return type: none
 */

var phoneSendTweet = _.merge(_.clone(StatementBloq, true), {

    name: 'phoneSendText',
    bloqClass: 'bloq-send-tweet',
    content: [
        [{
            id: 'PHONE',
            alias: 'dynamicDropdown',
            options: 'phoneElements'
        }, {
            alias: 'text',
            value: 'bloq-send-tweet'
        }, {
            bloqInputId: 'TWEET',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['string', 'selectVariable']
        }]
    ],
    code: '{PHONE}.println("twitterSend-" + {TWEET});',

    arduino: {
        includes: ['BitbloqSoftwareSerial.h'],
        code: '{PHONE}.println(String("twitterSend-")+String({TWEET}));'
    }

});
utils.preprocessBloq(phoneSendTweet);

module.exports = phoneSendTweet;
