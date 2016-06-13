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
  'click .goSignup': function() {
    FlowRouter.go('home');
  }
});
