'use strict';

const path = require('path');
const pkg = require('../package.json');

const distFolder = path.resolve(__dirname, '..', 'dist', pkg.version);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

exports.distFolder = distFolder;
exports.sleep = sleep;
