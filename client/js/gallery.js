/* ------------------------------ Helpers Block ------------------------------ */
Template.gallery.helpers({
  pathForSinglePic: function(){
    var routeName = 'singlePicPage';
    var pic = this;
    var params = {'picId':pic._id};
    var path = FlowRouter.path(routeName, params);
    return path;
  },

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
  },

  'click div.image': function() {
    var picId = this._id;
    var params = {'picId':picId};
    FlowRouter.go('singlePicPage', params);
  }
});
