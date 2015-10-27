define(["backbone","text!templates/about.html"], function(Backbone, AboutTemplate) {
  var AboutView = Backbone.View.extend({

    tagName: "div",
    className: "about-wrap",
    // template: _.template($("#bookTemplate").html()),

		initialize : function(){

        this.render();
      },

			template : _.template(AboutTemplate), // inline template

	    render: function(){

	        $("#pageContent").html(this.template);
	    }
  });

  return AboutView;
});
