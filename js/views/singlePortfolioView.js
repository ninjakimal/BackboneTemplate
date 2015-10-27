define(["backbone","text!templates/singlePortfolio.html"], function(Backbone, SinglePortfolioTemplate) {
  var SinglePortfolioView = Backbone.View.extend({

    tagName: "div",
    className: "singlePortfolio-wrap",
    // template: _.template($("#bookTemplate").html()),

		initialize : function(){

        this.render();
      },

			template : _.template(SinglePortfolioTemplate), // inline template

	    render: function(){

	        $("#pageContent").html(this.template);
	    }
  });

  return SinglePortfolioView;
});
