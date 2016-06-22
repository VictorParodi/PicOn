Meteor.publish('showPics', function() {
  return Pics.find();
});
