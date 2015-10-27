define(['backbone'], function(Backbone) {

		var Blog = Backbone.Model.extend({

			defaults : {
				post : 'Not specified'
			}
		});
	return Blog;
});
