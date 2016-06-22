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

    if (verify) {
      var picId = this._id;
      FlowRouter.go('gallery');
      Pics.remove({'_id':picId});
    }
  }
});
