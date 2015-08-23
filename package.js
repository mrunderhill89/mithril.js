// package metadata file for Meteor.js
'use strict';

var packageName = 'mrunderhill89:mithril';  // https://atmospherejs.com/hammer/hammer
var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.
var fs = Npm.require("fs");
var path = Npm.require("path");
var basepath = path.resolve("./packages/mithril-meteor/");
var packageJson = JSON.parse(fs.readFileSync(path.resolve(basepath, 'package.json')));

Package.describe({
  name: packageName,
  summary: '(Unofficial) Ports the Mithril.js MVC framework to Meteor.',
  version: packageJson.version,
  git: 'https://github.com/mrunderhill89/mithril.js'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.export('m', 'client');
  api.addFiles("mithril.js");
    if (typeof(m) !== "undefined") console.log(m);
  api.addFiles("meteor/export.js");
    if (typeof(m) !== "undefined") console.log(m);
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);
  api.addFiles('meteor/test.js', where);
});
