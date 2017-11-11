/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-powerbi',

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this._super.included.apply(this, arguments);
    
    app.import(app.bowerDirectory + '/powerbi-client/dist/powerbi.min.js');
    app.import('vendor/shims/powerbi.js');
    app.import('vendor/shims/powerbi-client.js');
  }
};
