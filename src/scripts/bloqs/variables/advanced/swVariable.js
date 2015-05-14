/*global require */
'use strict';

var _ = require('lodash');
var OutputBloq = require('./../../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'swVariable',
    bloqClass: 'bloq-sw-variable-advanced',
    content: [
        [{
            alias: 'text',
            value: 'Variable (software)'
        }, {
            id: 'VALUE',
            alias: 'dynamicDropdown',
            options: 'softwareVars'
        }]
    ],
    code: '{VALUE}'
});

module.exports = bloq;