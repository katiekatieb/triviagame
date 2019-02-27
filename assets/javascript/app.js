var questions = [
  {
    question: 'Which is the only mammal that can’t jump?',
    answers: [
      'Elephant',
      'Shark',
      'Dog'
    ],
    answer: 0
  },
  {
    question: 'Who lived at 221B, Baker Street, London?',
    answers: [
      'Princess Diana',
      'Shrek',
      'Sherlock Holmes'
    ],
    answer: 2
  },
  {
    question: 'Which is the largest ocean?',
    answers: [
      'Atlantic',
      'Great Lakes',
      'Pacific'
    ],
    answer: 2
  }
]

$('#start').on('click', function(){
  startGame();
  $(this).remove();
});

function startGame(){
  startTimer();

  for(var i = 0; i < questions.length; i++){
    var h3 = $('<h3>')
    h3.text(questions[i].question);
    $('#questions').append(h3);

    for(var j = 0; j < questions[i].answers.length; j++){
      $('#questions').append("<input class='answer' type='radio' name='group" + i + "' value='" + j + "'>" + questions[i].answers[j]);
    }
  };

  $("#questions").append("<button class='submit btn btn-outline-secondary' onclick='return calculateScore();' type='button'>Submit</button>")
}


function startTimer(){
  var timeLeft = 60;
  var timeCountdown = setInterval(function(){
    $('#time').text('Timer: ' + timeLeft);
    timeLeft--
    if (timeLeft === 0) {
      calculateScore();
      $('#time').text("Time's up!")
      clearInterval(timeCountdown);
    }
  }, 1000);
}

function calculateScore(){
  var correct = 0;
          
  for(var i = 0; i < questions.length; i++) {
    var radios = document.getElementsByName('group'+i);
    for(var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if(radio.value == questions[i].answer && radio.checked) {
        correct++;
      } 
    }
  } 

  var incorrect = questions.length - correct;
  $('#time').remove();
  $('#questions').remove();  
  $('#results').append("<h2 class='result'>Correct:  " + correct + "</h2>");
  $('#results').append("<h2 class='result'>Incorrect:  " + incorrect + "</h2>");
  $("body").append("<button id='restart' class='btn btn-outline-secondary' onclick='window.location.reload()' type='button'>Try Again</button>")

}
