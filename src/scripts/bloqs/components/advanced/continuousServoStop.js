/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../utils'),
    StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'advancedContinuousServoStop',
    bloqClass: 'bloq-continuous-servo-stop-advanced',
    content: [
        [{
            alias: 'text',
            value: 'Parar servo'
        }, {
            bloqInputId: 'SERVO',
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: '{SERVO}.write(90);'
});

utils.generateBloqInputConnectors(bloq);


module.exports = bloq;