/* ------------------------------ Helpers Block ------------------------------ */
Template.gallery.helpers({
  getPics: function() {
    var activatedFilter = Session.get('userFilter');
    if (activatedFilter) {
      return Pics.find({'createdById':activatedFilter}, {sort: {'createdOn': -1}});
    } else {
      return Pics.find({}, {sort: {'createdOn': -1}});
    }
  }
});




/* ------------------------------ Events Block ------------------------------ */
Template.gallery.events({
  'mouseenter .image': function() {
    $('.special.cards .image').dimmer({
      on:'hover'
    });
  },

  'click .jsEventRating': function(event) {
    var picId = this.data_id;
    var rating = $(event.currentTarget).data('userrating');
    Pics.update({'_id':picId}, {$set: {'rating':rating}});
  },

  'click .js-Event-setUserFilter': function() {
    Session.set('userFilter', this.createdById);
  }
});
