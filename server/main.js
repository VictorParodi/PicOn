import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Pics.find().count() === 0) {
    for (var img = 1; img <= 4; img += 1) {
      var dataNewPic = {
        'picName':'Pic '+img,
        'picSrc':'pic'+img+'.jpg',
        'rating':0,
        'createdBy':'John Doe',
        'createdOn':new Date()
      }

      Pics.insert(dataNewPic);
    }
  }
});
