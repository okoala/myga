'use strict';

const fs = require('fs');
const path = require('path');
const CRX = require('crx');
const pkg = require('../package.json');
const { distFolder } = require('./common');

async function buildCrxFromZip() {
  if (!process.env.CHROME_KEY_PEM) {
    console.warn('No CHROME_KEY_PEM found, skip building crx.');
    return;
  }

  const crx = new CRX({
    privateKey: decodeURIComponent(process.env.CHROME_KEY_PEM),
  });

  return crx
    .load(distFolder)
    .then(crx => crx.pack())
    .then(crxBuffer => {
      fs.writeFileSync(
        path.resolve(__dirname, '..', pkg.version + '.crx'),
        crxBuffer,
      );
      const xmlBuffer = crx.generateUpdateXML();
      fs.writeFileSync(path.resolve(__dirname, '../updates.xml'), xmlBuffer);
    });
}

buildCrxFromZip();
