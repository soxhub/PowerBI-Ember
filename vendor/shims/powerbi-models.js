(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['powerbi-models'] };
  }

  define('powerbi-models', [], vendorModule);
})();
