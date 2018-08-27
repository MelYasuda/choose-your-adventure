


function hideEscape(clicked_id) {
  $("#secondchoice").show();
   if (clicked_id === "hide") {
    $("#hide2").show();
  } else if (clicked_id === "escape" || clicked_id === "escape2") {
    $("#thirdchoice").show();
    $("#secondchoice").hide();
  }
    $("#firstchoice").hide();
}

// function Two(clicked_id) {
//   $("#thirdchoice").show();
//   if(clicked_id === "drunktalk1") {
//     $("#escape2").show();
//   } else if (clicked_id === "drunktalk2") {
//     $("#sirdrunk").show();
//   }
//   $("#secondchoice").hide();
// }

function majorChoice(clicked_id) {
  $("#fourthchoice").show();
  if (clicked_id === "dwarf") {
  }
  $("#thirdchoice").hide();
}

function trustDwarf(clicked_id) {

}


function END(clicked_id) {
  if(clicked_id === "fight" || clicked_id === "fight2") {
  $("#firstEnd").show();
  $("#firstchoice, #secondchoice").hide();
} else if (clicked_id === "notrust") {
  $("#secondEnd").show();
  $("#fourthchoice").hide();
} else if (clicked_id === "") {

}
}


$(document).ready(function(event){



});
