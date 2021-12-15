$( function() {
  $( "#sortable" ).sortable({
    placeholder: "ui-state-height"
  });
  $("#sortable").disableSelection();
} );




//ATTEMPTS AT TEXT CHANGE 

//document.getElementById('infoText2').innerHTML += document.getElementById('myText2').isContentEditable;

// $(".list-group").on("click", "li", function() {
//   //get cuttent text of li element
//   var text = $(this)
//     .text()
//     .trim();

//     //replace p element with a new textera
//     var textInput = $("<textarea>").addclass("form-control").val(text);
//     $(this).replacewith(textInput)

//     textInput.trigger("focus");
// });

