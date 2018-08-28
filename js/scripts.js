


function hideEscape(clicked_id) {
  $("#secondChoice").show();
   if (clicked_id === "hide") {
    $("#hide2").show();
  } else if (clicked_id === "escape" || clicked_id === "escape2") {
    $("#thirdChoice").show();
    $("#secondChoice").hide();
  }
    $("#firstChoice").hide();
}

function majorChoice(clicked_id) {
  $("#fourthChoice").show();
  if (clicked_id === "dwarf") {
  }
  $("#thirdChoice").hide();
}

function trustDwarf(clicked_id) {
  $("#fifthChoice").show();
  if (clicked_id === "mission") {
    $("#sixthChoice").show();
    $("#fifthChoice").hide();
  } else if (clicked_id === "trickGuard") {
    $("#trickGuard2").show();
    $("#sixthChoice").hide();
    $("#fifthChoice").hide();
  } else if (clicked_id === "attackGuard") {
    $("#attackGuard2").show();
    $("#sixthChoice").hide();
    $("#fifthChoice").hide();
  }
  $("#fourthChoice").hide();
}

function dwarfRoute(clicked_id) {
  if (clicked_id === "continue1" || clicked_id === "continue2") {
  $("#trickGuard2, #attackGuard2").hide();
  $("#seventhChoice").show();
} else if (clicked_id === "findParents") {
  $("#findParents2").show();
  $("#seventhChoice").hide();
} else if (clicked_id === "goDwarf" || clicked_id === "pickFather") {
  $("#findParents2, #seventhChoice").hide();
  $("#eigthChoice").show();
} else if (clicked_id === "swerveHorse" || clicked_id === "stayOnHorse") {
  $("#ninethChoice").show();
  $("#eigthChoice").hide();
} else if (clicked_id === "FindAnotherWay" || clicked_id === "turnAround") {
  $("#tenthChoice").show();
  $("#ninethChoice").hide();
  $("#goRight2").hide();
} else if (clicked_id === "goRight") {
  $("#goRight2").show();
  $("#tenthChoice").hide();
} else if (clicked_id === "goStraight") {
  $("#eleventhChoice").show();
  $("#tenthChoice").hide();
}
}

function END(clicked_id) {
  if(clicked_id === "fight" || clicked_id === "fight2") {
  $("#firstEnd").show();
  $("#firstChoice, #secondChoice").hide();
} else if (clicked_id === "notrust") {
  $("#secondEnd").show();
  $("#fourthChoice").hide();
} else if (clicked_id === "nomission") {
  $("#thirdEnd").show();
  $("#fifthChoice").hide();
} else if (clicked_id === "stopSneed") {
  $("#fourthEnd").show();
  $("#seventhChoice").hide();
} else if (clicked_id === "pickMother") {
  $("#fifthEnd").show();
  $("#findParents2").hide();
} else if (clicked_id === "waitTillMorning") {
  $("#sixthEnd").show();
  $("#ninethChoice").hide();
} else if (clicked_id === "goLeft") {
  $("#seventhEnd").show();
  $("#tenthChoice").hide();
} else if (clicked_id === "keepTricking") {
  $("#eighthEnd").show();
  $("#eleventhChoice").hide();
} else if (clicked_id === "askForRescue") {
  $("#ninethEnd").show();
  $("#eleventhChoice").hide();
}
}

function start() {
    $("#firstChoice").show();
    $("#firstEnd, #secondEnd, #thirdEnd, #fourthEnd, #fifthEnd, #sixthEnd, #seventhEnd, #eighthEnd, #ninethEnd").hide();
}

// user interface
$(document).ready(function(event){



});
