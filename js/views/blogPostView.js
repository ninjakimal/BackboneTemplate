define(["backbone", "text!templates/blogPost.html"], function (Backbone, BlogPostTemplate) {
    var BlogPostView = Backbone.View.extend({

        tagName: "div",
        className: "blogPost-wrap",
        initialize: function () {
            this.render();
        },

        template: _.template(BlogPostTemplate),
        
        render: function () {

            $("#pageContent").html(this.template);
        }
        
    });

    return BlogPostView;
});
