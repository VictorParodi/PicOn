/* ------------------------------ Helpers Block ------------------------------ */
Template.singlePicPage.helpers({
  getDataFromUrl: function() {
    var picId = FlowRouter.getParam('picId');
    var Pic = Pics.findOne({'_id':picId});
    return Pic;
  }
});




/* ------------------------------ Events Block ------------------------------ */
Template.singlePicPage.events({
  'click .goHome': function() {
    FlowRouter.go('home');
  },

  'click .jsEventDelPic': function() {

    var verify = confirm("Do you really want to delete this Pic?");
    var userId = Meteor.userId();
    var createdById = this.createdById;

    if (verify && (userId === createdById)) {
      var picId = this._id;
      FlowRouter.go('gallery');
      Pics.remove({'_id':picId});
    } else {
      alert("This Pic doesn't belong you");
    }
  }
});
