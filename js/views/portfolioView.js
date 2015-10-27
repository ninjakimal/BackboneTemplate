define(["backbone","text!templates/portfolio.html"], function(Backbone, PortfolioTemplate) {
  var PortfolioView = Backbone.View.extend({

    tagName: "div",
    className: "portfolio-wrap",
		initialize : function(){

        this.render();
      },

      template : _.template(PortfolioTemplate),

	    render: function(){

	        $("#pageContent").html(this.template);
	    }
  });

  return PortfolioView;
});
