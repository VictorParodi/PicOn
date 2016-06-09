/* ------------------------------ Home route ------------------------------ */
FlowRouter.route('/', {
  name:'home',
  action: function() {
    BlazeLayout.render('mainLayout', {content:'home'});
  }
});




/* ------------------------------ Signup route ------------------------------ */
FlowRouter.route('/signup', {
  name:'signupForm',
  action: function() {
    BlazeLayout.render('mainLayout', {content:'signupForm'});
  }
});




/* ------------------------------ Login route ------------------------------ */
FlowRouter.route('/login', {
  name:'login',
  action: function() {
    BlazeLayout.render('mainLayout', {content:'loginForm'});
  }
});




/* ------------------------------ Gallery route ------------------------------ */
FlowRouter.route('/gallery', {
  name:'gallery',
  action: function() {
    BlazeLayout.render('mainLayout', {content:'gallery'});
  }
});
