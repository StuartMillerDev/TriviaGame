  var question=[
    {
    ask:"Why is a duck?" ,
    answer:"Because it has flat feet",
    wrong:["It has a second stomach","It has teeth","Its feathers are not water proof"],

  },
  {
    ask:"What is the ultimate answer to the ultimate question?" ,
    answer:"42",
    wrong:["32","99","21"]
  },
  {
    ask:"Why?" ,
    answer:"Why not?",
    wrong:["Because","Why what?","42"]
  }
];

var time;
var seconds=25;
//countdown and generates the first question
function startGame(){
  if(seconds>0){
     time=setInterval(function(seconds){
      seconds--;
     }, 1000);
     console.log(seconds);
     $("#time").text(time);
  }
  generateQuestion();
}
startGame();

function selectQuestion(){
  // console.log($(question)[1]);
console.log("Random question: ", $(question)[Math.floor(Math.random() * this.length)]);
  return $(question)[Math.floor(Math.random() * this.length)];
}

//random number to place on html location
function generateQuestion(){
  //generates a random number used to place the correct answer and wrong answers
  var place = Math.floor(Math.random*4)+1;
  var wrongPlace=[];
  //populate the question
  var currentQuestion=selectQuestion();
  $("#question").text(currentQuestion.ask);

  //fill the array with incorrect answers
  for(var i=0; i<3; i++){
    if(i==place){
      i++;
      //skip if its the reserved place for the correct answer
    }
    else{
      // console.log("CURRENT QUESTION: ", currentQuestion);
      wrongPlace[i]=currentQuestion.wrong[i];

    }
  }
  //place correct answer in the array
  wrongPlace[place]=currentQuestion.answer;
  console.log("Correct answer location in array: ", wrongPlace[place], place)
  //place answers on elements
  for(var i=0; i<wrongPlace.length; i++){
    $("#"+i).text(wrongPlace[i]);
  }
}

//
// function decrement() {
//
//       //  Decrease number by one.
//       number--;
//
//       //  Show the number in the #show-number tag.
//     //  $("#show-number").html("<h2>" + number + "</h2>");
//
//
//       //  Once number hits zero...
//       if (number === 0) {
//
//         //  ...run the stop function.
//         stop();
//
//         //  Alert the user that time is up.
//         alert("Time Up!");
//       }
//     }
