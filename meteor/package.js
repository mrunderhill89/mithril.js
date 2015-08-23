// package metadata file for Meteor.js
'use strict';

var packageName = 'mrunderhill89:mithril';  // https://atmospherejs.com/hammer/hammer
var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: 'Ports the Mithril.js templating library to Meteor, along with some helpful bridge functions suggested by the author.\n Official library can be found here: https://github.com/lhorie/mithril.js',
  version: packageJson.version,
  git: 'https://github.com/mrunderhill89/mithril.js'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.export('m');
  api.addFiles([
    'mithril.js',
    'meteor/export.js'
  ], where
  );
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);
  api.addFiles('meteor/test.js', where);
});