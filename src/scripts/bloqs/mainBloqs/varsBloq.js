 /*global require */
 'use strict';

 var _ = require('lodash'),
     utils = require('./../../utils'),
     GroupBloq = require('./../groupBloq');

 var bloq = _.merge(_.clone(GroupBloq, true), {

     name: 'varsBloq',
     bloqClass: 'bloq-vars',
     headerText: 'Variables globales y funciones',
     descriptionText: 'Define los valores que vas a utilizar en Setup y Loop, también puedes hacer funciones para agrupar bloques',
     content: [],
     code: '{STATEMENTS}'
 });

 utils.generateBloqInputConnectors(bloq);


 module.exports = bloq;