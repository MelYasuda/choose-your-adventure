


function Pick(clicked_id) {
  $("#secondchoice").show();
  if(clicked_id === "pickdrunk") {
    $("#pickdrunk2, #prompt").show();
  } else if (clicked_id === "pickbard") {
    $("#pickbard2, #prompt").show();
  } else if (clicked_id === "pickdruid") {
    $("#pickdruid2, #prompt").show();
  }
    console.log(clicked_id);
    $("#firstchoice").hide();
}

function drunkTalk(clicked_id) {
  // $("#thirdchoice").show();
  if(clicked_id === "drunktalk1") {
    $("#whatdrink").show();
  } else if (clicked_id === "drunktalk2") {
    $("#sirdrunk").show();
  }
  $("#secondchoice").hide();
}




$(document).ready(function(event){



});
