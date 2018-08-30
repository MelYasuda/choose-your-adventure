
//Turn Pages//
// $("#flipbook").turn({
//     width: 400,
//     height: 300,
//     autoCenter: true
// });

function start() {
    $("#intro01").show();
    $("#firstEnd, #secondEnd, #thirdEnd, #fourthEnd, #fifthEnd, #sixthEnd, #seventhEnd, #eighthEnd, #ninethEnd").hide();
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

  }
  $("#intro03").hide();
}


function END(clicked_id) {
  if(clicked_id === "fight" || clicked_id === "fight2") {
    $("#firstEnd").show();
    $("#intro01, #secondChoice").hide();
  } else if (clicked_id === "notrust") {
    $("#secondEnd").show();
    $("#dwarf01").hide();
  } else if (clicked_id === "nomission") {
    $("#thirdEnd").show();
    $("#dwarf02").hide();
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
  } else if (clicked_id === "ignoreWhimsy") {
    $("#fairyFirstEnd").show();
    $("#shrinkingBoy92").hide();
  } else if (clicked_id === "goDruid") {
    $("#fairySecondEnd").show();
    $("#letThePixieDoIt116").hide();
  } else if (clicked_id === "runaway") {
    $("#fairyThirdEnd").show();
    $("#letThePixieDoIt116").hide();
  } else if (clicked_id === "goWitch") {
    $("#fairyFourthEnd").show();
    $("#pixieGetSmall26").hide();
  } else if (clicked_id === "sleepInDen") {
    $("#fairyFifthEnd").show();
    $("#spiderDen").hide();
  } else if (clicked_id === "sleepOutside") {
    $("#fairySixthEnd").show();
    $("#spiderDen").hide();
  }
}


  //PRINCE--Pixie Storyline
  function pixieChoices19(clicked_id){
    if(clicked_id === "trustWhimsy"){
      $("#shrinkingBoy92").show();
      $("#princeOne19").hide();
      // $("#dwarvesCaughtOne34").hide();
    } else if (clicked_id === "LetWhimsy") {
      $("#letThePixieDoIt116").show();
      $("#shrinkingBoy92").hide();
    } else if (clicked_id === "stayWithPixy") {
      $("#pixieGetSmall26").show();
      $("#letThePixieDoIt116").hide();
    } else if (clicked_id === "stayWithPixy2") {
      $("#spiderDen").show();
      $("#pixieGetSmall26").hide();
    }
  }


// GROWN-UPS -- Lizard Men Storyline
function grownUps86(clicked_id){
  if(clicked_id === "trustSandy") {
    $("#riverPrince134").show();
    $("#dwarvesCaughtOne34").hide();
  } else if (clicked_id === "rejectSandy") {
    $("#riverPrince134").hide();
    $("#dwarvesCaughtOne34").show();
  }
  $("#grownUpsOne86").hide();
}

function riverPrince134(clicked_id){
  if(clicked_id === "turnAround"){
    $("#dwarvesCaughtReturn72").show();
    $("#attackDragon49", "#sneakDragon24", "#pastDragon141").hide();
    // $("#sneakDragon24").hide();
    // $("#pastDragon141").hide();
  } else if (clicked_id === "fightDragon"){
    $("#attackDragon49").show();
    $("#sneakDragon24", "#pastDragon141", "#dwarvesCaughtReturn72").hide();
    // $("#pastDragon141").hide();
    // $("#dwarvesCaughtReturn72").hide();
  } else if (clicked_id === "avoidDragon"){
    $("#sneakDragon24").show();
    $("#pastDragon141", "#dwarvesCaughtReturn72", "attackDragon49").hide();
    // $("#dwarvesCaughtReturn72").hide();
    // $("#attackDragon49").hide();
  } else if (clicked_id === "carryRaft"){
    $("#pastDragon141").show();
    $("#dwarvesCaughtReturn72", "#attackDragon49", "#sneakDragon24").hide();
    // $("#attackDragon49").hide();
    // $("#sneakDragon24").hide();
  }
  $("#riverPrince134").hide();
}

function rightRiverBank141(clicked_id){
  if (clicked_id === "rollIntoRiver"){
    $("#riverSnakes93").show();
    $("#doNothing10").hide();
  } else if (clicked_id === "confused"){
    $("#riverSnakes93").hide();
    $("#doNothing10").show();
  }
  $("#pastDragon141").hide();
}

function swampRats114(clicked_id){
  if (clicked_id === "jumpInRiver"){
    $("#swimForIt66").show();
    $("#scareRatsOff73").hide();
  } else if (clicked_id === "scareRats") {
    $("#scareRatsOff73").show();
    $("#swimForIt66").hide();
  }
  $("#riverSnakes93").hide();
}

function waterFall70(clicked_id){
  if (clicked_id === "jumpLeft"){
    $("#waterFallJumpLeft147").show();
    $("#giantSteps84", "#islandProspects18").hide();
    // $("#islandProspects18").hide();
  } else if (clicked_id === "jumpRight") {
    $("#giantSteps84").show();
    $("#islandProspects18", "#waterFallJumpLeft147").hide();
    // $("#waterFallJumpLeft147").hide();
  } else if (clicked_id === "goToIsland") {
    $("#islandProspects18").show();
    $("#waterFallJumpLeft147", "#giantSteps84").hide();
    // $("#giantSteps84").hide();
  }
  $("#swimForIt66").hide();
}

function islandThing18(clicked_id){
  if (clicked_id === "waterfall"){
    $("#waterFallJumpLeft147").show();
    $("#giantSteps84", "#monstertalk48").hide();
    // $("#monstertalk48").hide();
  } else if (clicked_id === "giantSteps"){
    $("#giantSteps84").show();
    $("#monstertalk48", "#waterFallJumpLeft147").hide();
    // $("#waterFallJumpLeft147").hide();
  } else if (clicked_id === "monsterChat"){
    $("#monstertalk48").show();
    $("#waterFallJumpLeft147", "#giantSteps84").hide();
    // $("#giantSteps84").hide();
  }
  $("#islandProspects18").hide();
}

//end - lizard men
function trustLizard(clicked_id){
  if (clicked_id === "trustLizardmen"){
    $("#trustLizards98").show();
    $("#distrustLizards").hide();
  } else if (clicked_id === "neverTrustLizardmen"){
    $("#distrustLizards25").show();
    $("#trustLizards98").hide();
  }
  $("#giantSteps84").hide();
  $("#waterFallJumpLeft147").hide();
}

function secretChoice(clicked_id){
  if (clicked_id === "chooseHarold"){
    $("#haroldStory").show();
    $("#gogolStory").hide();
  } else if (clicked_id === "chooseGogol"){
    $("#gogolStory").show();
    $("#haroldStory").hide();
  }
  $("#menu").hide();
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
    $(".welcome").fadeIn(2000);
    $("#startGame").fadeIn(3000);
    $('#myModal').modal('hide');
  });

});
