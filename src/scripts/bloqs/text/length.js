/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'length',
    content: [
        [{
            alias: 'text',
            value: 'longitud'
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