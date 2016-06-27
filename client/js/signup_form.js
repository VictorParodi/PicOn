/* ------------------------------ Events Block ------------------------------ */
Template.signupForm.events({
  'submit form': function(event) {
    event.preventDefault();

    var userName = $('[name=name]').val();
    var password = $('[name=password]').val();

    var dataNewUser = {
      'username': userName,
      'password': password
    }

    Accounts.createUser(dataNewUser, function(error) {
      (error)? alert(error.reason) : FlowRouter.go('gallery');
    });
  }
});
