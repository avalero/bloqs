/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'ArrayVariable',
    content: [
        [{
            alias: 'text',
            value: 'Variable'
        }, {
            alias: 'dropdown',
            options: ['Seleccionar']
        }, {
            alias: 'text',
            value: '['
        }, {
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: ']'
        }]
    ]
});

module.exports = bloq;