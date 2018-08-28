


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
} else if ()
}

















































































function branchingQuest64(clicked_id){
  if(clicked_id === "followDwarvesTrack") {
    $("#dwarvesCaughtOne34").show();
    $("#grownUpsOne86").hide();
    $("#princeOne19").hide();
  } else if (clicked_id === "grownUpsTrack") {
    $("#grownUpsOne86").show();
    $("#dwarvesCaughtOne34").hide();
    $("#princeOne19").hide()
  } else if (clicked_id === "princeTrack") {
    $("#princeOne19").show();
    $("#dwarvesCaughtOne34").hide();
    $("#grownUpsOne86").hide();
  }
}

//PRINCE--Pixie Storyline
function pixieChoices19(clicked_id){
  if(clicked_id === "trustWhimsy"){
  } $("#shrinkingBoy92").show();
    $("#dwarvesCaughtOne34").hide();
  } else if (clicked_id === "rejectSandy") {
    $("#dwarvesCaughtOne34").show();
    $("#shrinkingBoy92").hide();
  }
}

function pixieTrust92(clicked_id){
  if (clicked_id === "LetWhimsy") {
    $("#letThePixieDoIt116").show();
    $("#thePixieIsProbablyWrong").hide();
  } else if (clicked_id === "WhimsyWho") {
    $("#thePixieIsProbablyWrong").show();
    $("#letThePixieDoIt116").hide();
  }
}

function pixieDryad116(clicked_id){
  if (clicked_id === "getShrunk") {
    $("#pixieGetSmall26").show();
    $("#thingsDryadsKnow53").hide();
    $("#runAway122").hide();
  } else if{
    $("#thingsDryadsKnow53").show();
    $("#pixieGetSmall26").hide();
    $("#runAway122").hide();
  } else if {
    $("#runAway122").show();
    $("#pixieGetSmall26").hide();
    $("#thingsDryadsKnow53").hide();
  }
}

function ohAWitch26(clicked_id) {
  if (clicked_id === "goIntoClearing"){
    $("#hungryWitch33").show();
    $("#avoidTheClearing129").hide();
  } else if (clicked_id === "aoidClearing"){
    $("#avoidTheClearing129").show();
    $("#hungryWitch33").hide();
  }
}

function trustAPixie129(clicked_id) {
  if (clicked_id === "takeANap") {
    $("#trustAndSleep32").show();
    $("#avoidThatSpider11").hide();
  } else if {
    $("#avoidThatSpider11").show();
    $("#trustAndSleep32").hide();
  }
}

function fightingTreeman94(clicked_id) {
  if (clicked_id === "WhimsyIdea"){
    $("#whimsyIdea124").show();
    $("#scratchSymbols71").hide();
    $("#cutTreeHand65").hide();
  } else if (clicked_id === "attackSymbols"){
    $("#scratchSymbols71").show();
    $("#whimsyIdea124").hide();
    $("#cutTreeHand65").hide();
  } else if (clicked_id === "cutTree") {
    $("#cutTreeHand65").show();
    $("#whimsyIdea124").hide();
    $("#scratchSymbols71").hide();
  }
}
function thePixieKing109(clicked_id) {
  if (clicked_id === "rideYourDog") {
    $("#rideIntoCity144").show();
    $("#flyIntoCity75").hide();
    $("#letPixiesHandleIt58").hide();
  } if else (clicked_id === "flyWithPixies") {
    $("#flyIntoCity75").show();
    $("#rideIntoCity144").hide();
    $("#letPixiesHandleIt58").hide();
  } if else (clicked_id === "goWithoutYou") {
    $("#letPixiesHandleIt58").show();
    $("#rideIntoCity144").hide();
    $("#flyIntoCity75").hide();
  }
}

function rideOnYourOwn(clicked_id) {
  if (clicked_id === "waitForTheDoor") {
    $("#noTimeForThat").show();
    $("#failedSpeechCheck").hide();
    $("#findThePrince").hide();
  } else if (clicked_id === "talkYourWayIn"){
    $("#failedSpeechCheck").show();
    $("#noTimeForThat").hide();
    $("#findThePrince").hide();
  } else if (clicked_id === "findAnotherWay"){
    $("#findThePrince").show();
    $("#noTimeForThat").hide();
    $("#failedSpeechCheck").hide();
  }
}


//GROWN-UPS -- Lizard Men Storyline
function grownUps86(clicked_id){
  if(clicked_id === "trustSandy") {
    $("#riverPrince134").show();
    $("#dwarvsCaughtOne34").hide();
  } else if (clicked_id === "rejectSandy") {
    $("#dwarvesCaughtOne34").show();
    $("#riverPrince134").hide();
  }
}

function riverPrince134(clicked_id){
  if(clicked_id === "turnAround"){
    $("#dwarvesCaughtReturn72").show();
    $("#attackDragon49").hide();
    $("#sneakDragon24").hide();
    $("#pastDragon141").hide();
  } else if (clicked_id === "fightDragon"){
    $("#attackDragon49").show();
    $("#sneakDragon24").hide();
    $("#pastDragon141").hide();
    $("#dwarvesCaughtReturn72").hide();
  } else if (clicked_id === "avoidDragon"){
    $("#sneakDragon24").show();
    $("#pastDragon141").hide();
    $("#dwarvesCaughtReturn72").hide();
    $("#attackDragon49").hide();
  } else if (clicked_id === carryRaft){
    $("#pastDragon141").show();
    $("#dwarvesCaughtReturn72").hide();
    $("#attackDragon49").hide();
    $("#sneakDragon24").hide();
  }
}

function rightRiverBank141(clicked_id){
  if (clicked_id === "rollIntoRiver"){
    $("#riverSnakes93").show();
    $("#fireSnakes91").hide();
    $("#doNothing10").hide();
  } else if (clicked_id === "rollIntoEmbers"){
    $("#fireSnakes91").show();
    $("#riversnakes93").hide();
    $("#doNothing10").hide();
  } else if (clicked_id === "confused"){
    $("#doNothing10").show();
    $("#riverSnakes93").hide();
    $("#fireSnakes91").hide();
  }
}

function swampRats114(clicked_id){
  if (clicked_id === "jumpInRiver"){
    $("#swimForIt66").show();
    $("#scareRatsOff73").hide();
  } else if (clicked_id === "scareRats") {
    $("#scareRatsOff73").show();
    ("#swimForIt66").hide();
  }
}

function waterFall70(clicked_id){
  if (clicked_id === "jumpLeft"){
    $("#waterFallJumpLeft147").show();
    $("#waterFallJumpRight84").hide();
    $("#islandProspects18").hide();
  } else if (clicked_id === "jumpRight") {
    $("#waterFallJumpRight84").show();
    $("#islandProspects18").hide();
    $("#waterFallJumpLeft147").hide();
  } else if (clicked_id === "goToIsland") {
    $("#islandProspects18").show();
    $("#waterFallJumpLeft147").hide();
    $("#waterFallJumpRight84").hide();
  }
}

function islandThing18(clicked_id){
  if (clicked_id === "waterfall"){
    $("#waterFallJumpLeft147").show();
    $("#giantSteps84").hide();
    $("#monstertalk48").hide();
  } else if (clicked_id === "giantSteps"){
    $("#giantSteps84").show();
    $("#monstertalk48").hide();
    $("#waterFallJumpLeft147").hide();
  } else if (clicked_id === "monsterChat"){
    $("#monstertalk48").show();
    $("#waterFallJumpLeft147").hide();
    $("#giantSteps84").hide();
  }
}

function trustLizard(clicked_id){
  if (clicked_id === "trustLizardmen"){
    $("#trustLizards98").show();
    $("#distrustLizards").hide();
  } else if (clicked_id === "neverTrustLizardmen"){
    $("#distrustLizards25").show();
    $("#trustLizards98").hide();
  }
}
