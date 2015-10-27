define(['backbone', 'text!templates/services.html'], function(Backbone, ServicesTemplate) {
  var ServicesView = Backbone.View.extend({

    tagName: "div",
    className: "services-wrap",

		initialize : function(){

        this.render();
      },

			template : _.template(ServicesTemplate), // inline template

	    render: function(){
            
          $("#pageContent").html(this.template);
	    }
  });

  return ServicesView;
});
