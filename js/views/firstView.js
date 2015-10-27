define(['backbone', 'bootstrap', 'text!templates/first.html'], function(Backbone, Bootstrap, FirstTemplate) {
  var FirstView = Backbone.View.extend({

    tagName: "div",
    className: "first-wrap",

		initialize : function(){
        this.render();
      },

			template : _.template(FirstTemplate), // inline template

	    render: function(){
            
          $("#pageContent").html(this.template);
	    }
  });

  return FirstView;
});
