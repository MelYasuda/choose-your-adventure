
//Turn Pages//
// $("#flipbook").turn({
//     width: 400,
//     height: 300,
//     autoCenter: true
// });

function start() {
    $("#intro01").show();
    $("#introEND01, #dwarfEND01, #dwarfEND02, #dwarfEND03, #dwarfEND04, #dwarfEND05, #dwarfEND06, #dwarfEND07, #dwarfEND08, #dwarfEND09, #lizardEND01, #lizardEND02, #lizardEND03, #lizardEND04, #lizardEND05, #lizardEND06, #fairy01, #fairy02, #fairy03, #fairy04, #fairy05").hide();
}
// INTRO
function intro(clicked_id) {
  $("#intro01").show();
  if (clicked_id === "hide") {
    $("#intro02").show();
    $("#intro01").hide();
  } else if (clicked_id === "escape" || clicked_id === "escape2") {
    $("#intro03").show();
    $("#intro01, #intro02").hide();
  }
  $("#menu").hide();
}
// DWARF ROUTE
function dwarfRoute(clicked_id) {
  if (clicked_id === "dwarf" || clicked_id === "rejectWhimsy" || clicked_id === "rejectSandy" || clicked_id === "byeSandy") {
    $("#dwarf01").show();
    $("#fairy01, #lizard01").hide();
  } else if (clicked_id === "trust") {
    $("#dwarf01").hide();
    $("#dwarf02").show();
  } else if (clicked_id === "mission") {
    $("#dwarf02").hide();
    $("#dwarf03").show();
  } else if (clicked_id === "trickGuard") {
    $("#dwarf03, #attackGuard2, #attackpic").hide();
    $("#dwarf04, #trickGuard2, #trickpic").show();
  } else if (clicked_id === "attackGuard") {
    $("#dwarf03, #trickGuard2, #trickpic").hide();
    $("#dwarf04, #attackGuard2, #attackpic").show();
  } else if (clicked_id === "attackTrick") {
    $("#dwarf04").hide();
    $("#dwarf05").show();
  } else if (clicked_id === "findParents") {
    $("#dwarf05").hide();
    $("#dwarf06").show();
  } else if (clicked_id === "goDwarf" || clicked_id === "pickFather") {
    $("#dwarf05, #dwarf06").hide();
    $("#dwarf07").show();
  } else if (clicked_id === "swerveHorse") {
    $("#dwarf07, #stayOnHorse2, #stayhorsepic").hide();
    $("#dwarf08, #swerveHorse2, #swervepic").show();
  } else if (clicked_id === "stayOnHorse") {
    $("#dwarf07, #swerveHorse2, #swervepic").hide();
    $("#dwarf08, #stayOnHorse2, #stayhorsepic").show();
  } else if (clicked_id === "stayServe") {
    $("#dwarf08").hide();
    $("#dwarf09").show();
  } else if (clicked_id === "sneakCityDwarf") {
    $("#dwarf09").hide();
    $("#dwarf10").show();
  } else if (clicked_id === "goRightPipe") {
    $("#dwarf10").hide();
    $("#dwarf11").show();
  } else if (clicked_id === "turnAroundPipe") {
    $("#dwarf11").hide();
    $("#dwarf10").show();
    $("#goRightPipe").remove();
  } else if (clicked_id === "goStraightPipe") {
    $("#dwarf10").hide();
    $("#dwarf12").show();
  }
  $("#intro03").hide();
}
// FAIRY ROUTE
function fairyRoute(clicked_id) {
  if (clicked_id === "fairy") {
    $("#fairy01").show();
  } else if (clicked_id === "trustWhimsy") {
    $("#fairy01").hide();
    $("#fairy02").show();
  } else if (clicked_id === "letWhimsy") {
    $("#fairy02").hide();
    $("#fairy03").show();
  } else if (clicked_id === "stayWithWhimsy") {
    $("#fairy03").hide();
    $("#fairy04").show();
  } else if (clicked_id === "believeWhimsy") {
    $("#fairy04").hide();
    $("#fairy05").show();
  }
  $("#intro03").hide();
}
// LIZARD ROUTE
function lizardRoute(clicked_id) {
  if (clicked_id === "lizard") {
    $("#lizard01").show();
  } else if (clicked_id === "trustSandy") {
    $("#lizard01").hide();
    $("#lizard02").show();
  } else if (clicked_id === "turnFromDragon") {
    $("#lizard02").hide();
    $("#lizard03").show();
  } else if (clicked_id === "avoidDragon") {
    $("#lizard02, #carryRaft2, #carryRaftPic").hide();
    $("#lizard04, #avoidDragon2, #avoidDragonPic").show();
  } else if (clicked_id === "carryRaft") {
    $("#lizard02, #avoidDragon2, #avoidDragonPic").hide();
    $("#lizard04, #carryRaft2, #carryRaftPic").show();
  } else if (clicked_id === "pastDragon") {
    $("#lizard04").hide();
    $("#lizard05").show();
  } else if (clicked_id === "rollInRiver") {
    $("#lizard05, #rollInFire2, #rollFirePic").hide();
    $("#lizard06, #rollInRiver2, #rollRiverPic").show();
  } else if (clicked_id === "rollInFire") {
    $("#lizard05, #rollInRiver2, #rollRiverPic").hide();
    $("#lizard06, #rollInFire2, #rollFirePic").show();
  } else if (clicked_id === "pastSnakes") {
    $("#lizard06").hide();
    $("#lizard07").show();
  } else if (clicked_id === "scareRats") {
    $("#lizard07").hide();
    $("#lizard08").show();
  } else if (clicked_id === "goIsland") {
    $("#lizard08").hide();
    $("#lizard10").show();
  } else if (clicked_id === "jumpLeft" || clicked_id === "jumpLeft3") {
    $("#lizard08, #lizard10, #jumpRight2, #jumpRightPic").hide();
    $("#lizard09, #jumpLeft2, #jumpLeftPic").show();
  } else if (clicked_id === "jumpRight" || clicked_id === "jumpRight3") {
    $("#lizard08, #lizard10, #jumpLeft2, #jumpLeftPic").hide();
    $("#lizard09, #jumpRight2, #jumpRightPic").show();
  } else if (clicked_id === "waterfall") {
    $("#lizard09").hide();
    $("#lizard11").show();
  }
  $("#intro03").hide();
}


function END(clicked_id) {
  if(clicked_id === "fight" || clicked_id === "fight2") {
    $("#introEND01").show();
    $("#intro01, #intro02").hide();
  } else if (clicked_id === "notrust") {
    $("#dwarfEND01").show();
    $("#dwarf01").hide();
  } else if (clicked_id === "nomission") {
    $("#dwarfEND03").show();
    $("#dwarf02").hide();
  } else if (clicked_id === "stopSneed") {
    $("#dwarfEND04").show();
    $("#dwarf05").hide();
  } else if (clicked_id === "pickMother") {
    $("#dwarfEND05").show();
    $("#dwarf06").hide();
  } else if (clicked_id === "waitTillMorning") {
    $("#dwarfEND06").show();
    $("#dwarf09").hide();
  } else if (clicked_id === "goLeft") {
    $("#dwarfEND07").show();
    $("#dwarf10").hide();
  } else if (clicked_id === "keepTricking") {
    $("#dwarfEND08").show();
    $("#dwarf12").hide();
  } else if (clicked_id === "askForRescue") {
    $("#dwarfEND09").show();
    $("#dwarf12").hide();
  } else if (clicked_id === "ignoreWhimsy") {
    $("#fairyEND01").show();
    $("#fairy02").hide();
  } else if (clicked_id === "goDruid") {
    $("#fairyEND02").show();
    $("#fairy03").hide();
  } else if (clicked_id === "runaway") {
    $("#fairyEND03").show();
    $("#fiary03").hide();
  } else if (clicked_id === "goWitch") {
    $("#fairyEND04").show();
    $("#fairy04").hide();
  } else if (clicked_id === "sleepInDen") {
    $("#fairyEND05").show();
    $("#fairy05").hide();
  } else if (clicked_id === "sleepOutside") {
    $("#fairyEND06").show();
    $("#fairy05").hide();
  } else if (clicked_id === "fightDragon") {
    $("#lizardEND01").show();
    $("#lizard02").hide();
  } else if (clicked_id === "hopeSandy") {
    $("#lizardEND02").show();
    $("#lizard05").hide();
  } else if (clicked_id === "jumpInRiver") {
    $("#lizardEND03").show();
    $("#lizard07").hide();
  } else if (clicked_id === "monsterChat") {
    $("#lizardEND04").show();
    $("#lizard10").hide();
  } else if (clicked_id === "trustLizard") {
    $("#lizardEND05").show();
    $("#lizard11").hide();
  } else if (clicked_id === "noTrustLizard") {
    $("#lizardEND06").show();
    $("#lizard11").hide();
  }
}


// user interface
$(document).ready(function(){
  $("#passwordInput").submit(function(event){
    event.preventDefault();
    var Password = $("#passwordText").val();
    if (Password === "Wizard" || Password === "wizard"){
      $("#secretCharacters").show();
      $("#passwordInput").hide();
    }
  });



  // assign user name to the story and hide the modal button
  $("#name-input").submit(function(event){
    event.preventDefault();
    var userName = $("#nameText").val();
    $(".user-name").append(userName);
    $("#modal-btn").hide();
    $(".welcome").fadeIn(3000);
    $("#startGame").fadeIn(3000);
    $('#myModal').modal('hide');
  });

});
