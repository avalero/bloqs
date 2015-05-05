/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'SelectVariable',
    content: [
        [{
            alias: 'text',
            value: 'Variable'
        }, {
            id: 'VAR',
            alias: 'dropdown',
            options: 'variables'
        }]
    ], 
    code: '{VAR}',
    returnType: '{VAR.connectionType}'

});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;