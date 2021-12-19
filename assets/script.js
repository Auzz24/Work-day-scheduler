$(document).ready(function(){
var currentDay = $("#currentDay")
currentDay.text(moment().format('MMMM Do YYYY, h:mm'));
}
);


$( function() {
  $( "#sortable" ).sortable({
    placeholder: "ui-state-height"
  });
  $("#sortable").disableSelection();
} );

function save (event){
  var task = (event.target.previousSibling.value)
  var time = (event.target.previousSibling.previousSibling.textContent)
  localStorage.setItem (time, task)
}
var buttonLi = document.querySelectorAll (".saveBtn")
console.log(buttonLi)
for ( i = 0; i < buttonLi.length; i++) {
  var button = buttonLi[i];
  
  button.addEventListener ("click", save)
}

var h3Array = document.querySelectorAll("h3")
for ( i = 0; i < h3Array.length; i++) {
  var h3 = h3Array[i];
  var task = localStorage.getItem(h3.textContent)
  h3.nextSibling.value = task
}

function hourFun (){

$(".time-block").each(function(index){
  var currentHour = moment().hours();
  console.log(currentHour)
  
}
);
};

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

