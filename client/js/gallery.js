/* ------------------------------ Helpers Block ------------------------------ */
Template.gallery.helpers({
  getPics: function() {
    return Pics.find({}, {sort: {'createdOn': -1}});
  }
});
