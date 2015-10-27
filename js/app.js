require.config({
  paths: {
    jquery: 'lib/jquery',
    bootstrap : 'lib/bootstrap',
    underscore: 'lib/underscore',
    text : 'lib/text',
    tpl : 'lib/tpl',
    backbone: 'lib/backbone'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    bootstrap : { deps :['jquery'] }
  }
});

require(
  ["jquery",
    "underscore",
    "backbone",
//    "views/first",
    "routers/mainRouter"
  ],
  function($, _, Backbone, MainRouter) {
    $(function() {

      var mainRouter = new MainRouter();

      // without history API
      Backbone.history.start();
    });
  }
);
