define(["backbone", "bootstrap", "text!templates/faq.html"], function (Backbone, Bootstrap, FaqTemplate) {
    var FaqView = Backbone.View.extend({
        el: $('.container'),
        tagName: "div",
        className: "portfolio-wrap",
        initialize: function () {
            this.render();
        },

        template: _.template(FaqTemplate),

        render: function () {

            $("#pageContent").html(this.template);
        }
    });

    return FaqView;
});
