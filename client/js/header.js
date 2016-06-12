/* ------------------------------ Helpers Block ------------------------------ */
Template.header.helpers({
  getUserLogged: function() {
    var user = Meteor.user();
    if (user) {
      return user.username;
    } else {
      return 'Invitado';
    }
  },

  userFilterActivated: function() {
    var activatedFilter = Session.get('userFilter');
    if (activatedFilter) {
      return true;
    } else {
      return false;
    }
  }
});



/* ------------------------------ Events Block ------------------------------ */
Template.header.events({
  'click .jsEventLogout': function() {
    Meteor.logout(FlowRouter.go('home'));
  },

  'click .jsAddPics': function() {
    $('#addPicModal').modal('show');
  },

  'click .goSignup': function() {
    FlowRouter.go('signupForm');
  },

  'click .goLogin': function() {
    FlowRouter.go('login');
  },

  'click .js-event-delUserFilter': function() {
    Session.set('userFilter', false);
  }
});
