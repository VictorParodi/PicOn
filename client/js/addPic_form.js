/* ------------------------------ Hooks Block ------------------------------ */
Template.addPicForm.onRendered(function() {
  $('#addPicModal').modal({
    onDeny: function() {
      var user = Meteor.user();
      var picSrc = $('[name=picSrc]').val();
      var picName = $('[name=picName]').val();

      if (picSrc && picName) {

        Meteor.call('addPic', user, picSrc, picName)

        $('[name=picSrc]').val('');
        $('[name=picName]').val('');
        $('#addPicModal').modal('hide');

      } else {
        alert("Don't send empty fields, please");
      }

      return false;
    }
  });
});




/* ------------------------------ Events Block ------------------------------ */
Template.addPicForm.events({

});
