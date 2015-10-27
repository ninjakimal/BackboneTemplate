define(["backbone","text!templates/contact.html"], function(Backbone, ContactTemplate) {
  var ContactView = Backbone.View.extend({

    tagName: "div",
    className: "contact-wrap",
    // template: _.template($("#bookTemplate").html()),

		initialize : function(){

        this.render();
      },

			template : _.template(ContactTemplate), // inline template

	    render: function(){

	        $("#pageContent").html(this.template);
	    }
  });

  return ContactView;
});
