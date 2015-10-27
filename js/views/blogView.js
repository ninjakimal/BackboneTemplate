define(["backbone","text!templates/blog.html"], function(Backbone, BlogTemplate) {
  var BlogView = Backbone.View.extend({

    tagName: "div",
    className: "blog-wrap",
    // template: _.template($("#bookTemplate").html()),

		initialize : function(){

        this.render();
      },

			template : _.template(BlogTemplate), // inline template

	    render: function(){

	        $("#pageContent").html(this.template);
	    }
  });

  return BlogView;
});
