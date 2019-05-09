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

function finish(){
  $("#root").empty();
  let jt=$("<div class='jumbotron jumbotron-fluid text-center'></jumbotron>");
  jt.append($("<h1>GOOD JOB!</h1>"))
  $("#root").append(jt);
}

function tryAgain(){
  $("#root").empty();
  let jt=$("<div class='jumbotron jumbotron-fluid text-center'></jumbotron>");
  jt.append($("<h1>OPPS YOU RAN OUT OF TIME!</h1>"))
  $("#root").append(jt);
}

function checkAnswer(q,userAnswer){
  let currentQuestion=q;
  console.log(q);
  if(userAnswer==q.answer){
    console.log("ANSWER CORRECT");
    return true;
  }
  else {
    console.log("ANSWER INCORRECT: ",userAnswer);

    return false;
  }


}
function generateQuestion(q){
  questionNumber++;
  // Empty the question and answer divs
  $("#Ask").empty();
  $(".Answers").empty();
  // temp array
  let arr=[];
  //add the correct answer
  arr.push(q.answer);
  // Contatenate the wrong answers
  q.wrong.forEach((item)=>{
    arr.push(item);
  })
  // Shuffle the answers
  shuffle(arr);

  // place the question
  $("#Ask").text(q.ask);
  // creates checkboxes for each answer
  arr.forEach(item=>{
    // temp varable holding an input element
    let a=$("<input type='radio' name='inlineRadioOptions'>"+item+"</input>");
    // add answer class to that element
    a.addClass("Answer");
    a.attr("id", item);
    // append to the Answers div
    $(".Answers").append(a);
});
}

  function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

    let number = 20;
    let intervalId;
    let questionNumber=0;

    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#time").html("<h2>" + number + "</h2>");

      if (number === 0) {

        stop();
        tryAgain();
      }
    }

    //  The stop function
    function stop() {

      clearInterval(intervalId);
    }

    run();
    generateQuestion(question[0]);

$(document).on('click','.Answers',()=>{
  console.log("ANSWER CLICKED!");
  let selValue = $('input[name=inlineRadioOptions]:checked').attr('id');

  if((number>0) && questionNumber<question.length){
    if(checkAnswer(question[questionNumber-1],selValue)){
      generateQuestion(question[questionNumber]);
    }

  }
  else {
    stop();
    finish();
  }

});
