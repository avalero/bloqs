/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'basicOperations',
    content: [
        [{
            bloqInputId: 'ARG1',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            id: 'OPERATOR',
            alias: 'dropdown',
            options: [{label:'+',value:'+'},{label:'-',value:'-'},{label:'x',value:'*'},{label:'/',value:'/'},{label:'^',value:'^'}]//'+', '-', '×', '÷', '^']
        }, {
            bloqInputId: 'ARG2',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{ARG1} {OPERATOR} {ARG2}',
    returnType : 'float'
});

utils.generateBloqInputConnectors(bloq);


module.exports = bloq;