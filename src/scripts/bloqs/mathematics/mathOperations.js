/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'mathOperations',
    content: [
        [{
            alias: 'dropdown',
            options: ['Raíz cuadrada', 'Valor absoluto', '-', 'ln', 'log10', 'e^', '10^']
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;