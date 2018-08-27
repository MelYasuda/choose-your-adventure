// function Pick() {
//   if ($("#pickdrunk").click())  {
//     $("img#drunk").show();
//   } else if ($("#pickbard").click()) {
//     $("img#bard").show();
//   } else if ($("#pickdruid").click()) {
//     $("img#druid").show();
//   }
// }

// function Pick() {
// var x = document.getElementsByTagName("button")[0].getAttribute("id");
// console.log(x);
// }



// function Pick(clicked_id) {
//   if(clicked_id === "pickdrunk") {
//     $("#drunk, #demo").show();
//     FirstTalk = "drunk";
//   } else if (clicked_id === "pickbard") {
//     $("img#bard, #demo").show();
//     FirstTalk = "bard";
//   } else if (clicked_id === "pickdruid") {
//     $("img#druid, #demo").show();
//     FirstTalk = "druid";
//   }
//     console.log(clicked_id);
//     $("#firstchoice").hide();
// }

var FirstTalk;

function Pick(clicked_id) {
  if(clicked_id === "pickdrunk") {
    $("#drunk, #demo").show();
    FirstTalk = "drunk";
  } else if (clicked_id === "pickbard") {
    $("img#bard, #demo").show();
    FirstTalk = "bard";
  } else if (clicked_id === "pickdruid") {
    $("img#druid, #demo").show();
    FirstTalk = "druid";
  }
    console.log(clicked_id);
    $("#firstchoice").hide();
}



console.log(FirstTalk);

// function pickagain() {
//   if(document.getElementById("pickdrunk").innerHTML = true) {
//     $("img#drunk").show();
//   } else if (document.getElementById("pickbard").innerHTML = true) {
//     $("img#bard").show();
//   }
//   // return "hello";
// }
//
// function Pick() {
//  document.getElementById("demo").innerHTML = pickagain();
//
// }
//
// function Pick() {
//   var x = document.getElementById("myBtn").getAttribute("onclick");
//     document.getElementById("demo").innerHTML = x;
// }



$(document).ready(function(event){



});
