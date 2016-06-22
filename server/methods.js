Meteor.methods({
  'addPic': function(user, picSrc, picName) {

    var dataNewPic = {
      'picName': picName,
      'picSrc': picSrc,
      'rating': 0,
      'createdBy': user.username,
      'createdById': user._id,
      'createdOn':new Date()
    }

    Pics.insert(dataNewPic);
  },

  'updateRating': function(picId, rating) {
    Pics.update({'_id':picId}, {$set: {'rating': rating}});
  },

  'deletePic': function(picId) {
    Pics.remove({'_id':picId});
  }
});
