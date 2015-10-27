define(["backbone", "models/book"], function(Backbone, Book) {

  var Library = Backbone.Collection.extend({

        model : Book
    });

  return Library;
});
