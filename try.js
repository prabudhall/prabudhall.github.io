

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];

  // $("."+randomChosenColour).addClass("pressed");

  playSound(randomChosenColour);
  // animatePress(randomChosenColour);
  // var ad = new Audio("sounds/"+randomChosenColour+".mp3");
  // ad.play();

  // setTimeout(function(){
  //   $("."+randomChosenColour).removeClass("pressed");
  // }, 200);

  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
}

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");

  // $("."+userChosenColour).addClass("pressed");

  playSound(userChosenColour);
  // animatePress(userChosenColour);
  // var ad = new Audio("sounds/"+userChosenColour+".mp3");
  // ad.play();

  // setTimeout(function(){
  //   $("."+userChosenColour).removeClass("pressed");
  // }, 200);

  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});

function playSound(ad){
  $("."+ad).addClass("pressed");

  var adi = new Audio("sounds/"+ad+".mp3");
  adi.play();

  setTimeout(function(){
    $("."+ad).removeClass("pressed");
  }, 200);
}

// function animatePress(pr){
//   $("."+pr).addClass("pressed");
//
//   setTimeout(function(){
//     $("."+pr).removeClass("pressed");
//   }, 200);
// };
