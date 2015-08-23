Package.describe({
  name: 'mrunderhill:mithril',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Adds the Mithril.js templating engine to Meteor, along with a few adjustments suggested by the author.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('mithril.js');
  api.addFiles('mithril-meteor.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mrunderhill:mithril');
  api.addFiles('mithril.min.js');
  api.addFiles('mithril-tests.js');
});
