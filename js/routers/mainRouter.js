// Router
define(['backbone',
        'views/firstView',
        'views/aboutView',
        'views/blogView',
        'views/contactView',
        'views/servicesView',
        'views/portfolioView',
        'views/pricingView',
        'views/faqView',
        'views/singlePortfolioView',
        'views/blogPostView'],

function(Backbone,
         FirstView,
         AboutView,
         BlogView,
         ContactView,
         ServicesView,
         PortfolioView,
         PricingView,
         FaqView,
         SinglePortfolioView,
         BlogPostView) {

    var MainRouter = Backbone.Router.extend({

        routes : {
          '' : 'first',
          'about'       : 'showAbout',
          'blog'        : 'showBlog',
          'contact'     : 'showContact',
          'services'    : 'showServices',
          'portfolio'   : 'showPortfolio',
          'pricing'     : 'showPricing',
          'faq'         : 'showFaq',
          'singlePortfolio' : 'showSinglePortfolio',
          'blogPost' : 'showBlogPost'
        },

        first: function() {
            var firstView = new FirstView();
        },

        showAbout: function(){
          var aboutView = new AboutView();
        },

        showBlog: function(){
          var blogView = new BlogView();
        },

        showContact: function(){
          var contactView = new ContactView();
        },
        
        showServices: function(){
          var servicesView = new ServicesView();
        },
    
        showPortfolio: function(){
          var portfolioView = new PortfolioView();
        },
    
        showPricing: function(){
          var pricingView = new PricingView();
        },
    
        showFaq: function(){
          var faqView = new FaqView();
        },
    
        showSinglePortfolio: function(){
          var singlePortfolioView = new SinglePortfolioView();
        },
        
        showBlogPost: function(){
          var blogPostView = new BlogPostView();
        }

    });

    return MainRouter;
});
