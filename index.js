
var started = false;
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var numClick = 0;

$(document).keypress(function() {
  if(started == false){
    started == true;
    nextSequence();
  }
});

function nextSequence(){
  ++level;
  numClick = 0;
  $("h1").text("Level "+level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];

  playSound(randomChosenColour);

  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
}

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");

  if(userChosenColour == gamePattern[numClick])
  {
    playSound(userChosenColour);
    ++numClick;
    userClickedPattern = []
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    if(numClick == level)
    {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }
  else{
    var adi = new Audio("sounds/wrong.mp3");
    adi.play();

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");
    started = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
  }
});

function playSound(ad){
  $("."+ad).addClass("pressed");

  var adi = new Audio("sounds/"+ad+".mp3");
  adi.play();

  setTimeout(function(){
    $("."+ad).removeClass("pressed");
  }, 200);
}
