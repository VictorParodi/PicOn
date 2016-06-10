/* ------------------------------ Helpers Block ------------------------------ */
Template.header.helpers({
  getUserLogged: function() {
    var user = Meteor.user();
    if (user) {
      return user.username;
    } else {
      return 'Invitado';
    }
  }
});



/* ------------------------------ Events Block ------------------------------ */
Template.header.events({
  'click .jsEventLogout': function() {
    Meteor.logout(FlowRouter.go('home'));
  },

  'click .goSignup': function() {
    FlowRouter.go('signupForm');
  },

  'click .goLogin': function() {
    FlowRouter.go('login');
  }
});
