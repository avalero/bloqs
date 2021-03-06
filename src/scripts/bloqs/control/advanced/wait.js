/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: waitAdvanced
 *
 * Bloq type: Statement
 *
 * Description: It delays the progression of the program
 *              the given time.
 *
 * Return type: none
 */

var waitAdvanced = _.merge(_.clone(StatementBloq, true), {

    name: 'waitAdvanced',
    bloqClass: 'bloq-wait',
    content: [
        [{
            alias: 'text',
            value: 'bloq-wait-wait'
        }, {
            bloqInputId: 'TIME',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }]
    ],
    code: 'delay({TIME});',
    arduino: {
        code: 'delay({TIME});'
    }
});

utils.preprocessBloq(waitAdvanced);

module.exports = waitAdvanced;