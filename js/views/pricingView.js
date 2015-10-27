define(["backbone","text!templates/pricing.html"], function(Backbone, PricingTemplate) {
  var PricingView = Backbone.View.extend({

    tagName: "div",
    className: "portfolio-wrap",
		initialize : function(){

        this.render();
      },

      template : _.template(PricingTemplate),

	    render: function(){

	        $("#pageContent").html(this.template);
	    }
  });

  return PricingView;
});
