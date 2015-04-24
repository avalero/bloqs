/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'number',
    content: [
        [{
            alias: 'numberInput',
            value: 0
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;