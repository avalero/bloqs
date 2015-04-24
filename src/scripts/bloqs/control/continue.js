/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'continue',
    content: [
        [{
            alias: 'text',
            value: 'Continuar con la siguiente iteracción del bucle'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;