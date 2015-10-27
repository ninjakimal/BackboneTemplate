define(['backbone'], function (Backbone) {

		var Contact = Backbone.Model.extend({

			defaults : {
				post : 'Not specified'
			}
		});
	return Contact;
});
