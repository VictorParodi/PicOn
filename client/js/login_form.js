/* ------------------------------ Events Block ------------------------------ */
Template.loginForm.events({
  'submit form': function(event) {
    event.preventDefault();

    var userName = $('[name=name]').val();
    var password = $('[name=password]').val();

    Meteor.loginWithPassword(userName, password, function(error) {
      (error)? alert(error.reason): FlowRouter.go('gallery');
    });
  }
});
