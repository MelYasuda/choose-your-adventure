


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

function END(clicked_id) {
  if(clicked_id === "fight" || clicked_id === "fight2") {
  $("#firstEnd").show();
  $("#firstchoice, #secondchoice").hide();
  }
}


$(document).ready(function(event){



});
