Meteor.publish('showPics', function(picId) {
  if (picId) {
    return Pics.find({'_id':picId});
  } else {
    return Pics.find();
  }
});
