/* jshint node: true */
'use strict';

module.exports = {
	name: 'ember-powerbi',

	isDevelopingAddon: function() {
		return true;
	},

	included: function(app) {
		this._super.included.apply(this, arguments);

		app.import('vendor/powerbi-client/dist/powerbi.js');
		app.import('vendor/shims/powerbi.js');
		app.import('vendor/shims/powerbi-client.js');
	}
};
