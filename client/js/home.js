/* ------------------------------ Helpers Block ------------------------------ */
Template.home.helpers({
  pathForGallery: function() {
    var routeName = 'gallery';
    var path = FlowRouter.path(routeName);
    return path;
  },

  pathForSignup: function() {
    var routeName = 'signupForm';
    var path = FlowRouter.path(routeName);
    return path;
  },

  pathForLogin: function() {
    var routeName = 'login';
    var path = FlowRouter.path(routeName);
    return path;
  }
});
