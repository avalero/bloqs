/*global require */
'use strict';

var _ = require('lodash');
var StatementInputBloq = require('./../statementInputBloq');

var bloq = _.merge(_.clone(StatementInputBloq, true), {

    name: 'else',
    content: [
        [{
            alias: 'text',
            value: 'de lo contrario ejecutar:'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;