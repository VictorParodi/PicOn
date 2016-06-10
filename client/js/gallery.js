/* ------------------------------ Helpers Block ------------------------------ */
Template.gallery.helpers({
  getPics: function() {
    return Pics.find({}, {sort: {'createdOn': -1}});
  }
});




/* ------------------------------ Events Block ------------------------------ */
Template.gallery.events({
  'mouseover .image': function() {
    $('.special.cards .image').dimmer({
      on:'hover'
    });
  }
});
