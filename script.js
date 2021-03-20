var quiz = {
	"JS": [{
		"id": 1,
		"question": "Self information should be?",
		"options": [{
		  "a": "Positive",
		  "b": "Negative",
		  "c": "Positive & Negative",
		  "d": "None of the mentioned"
		}],
		"answer": "Positive",
		"score": 0,
		"status": "Self information is always non negative."
	  },
	  {
		"id": 2,
		"question": "The unit of average mutual information is?",
		"options": [{
		  "a": "Bits",
		  "b": "Bytes",
		  "c": "Bits per symbol",
		  "d": "Bytes per symbol"
		}],
		"answer": "Bits",
		"score": 0,
		"status": "The unit of average mutual information is bits."
	  },
	  {
		"id": 3,
		"question": "When probability of error during transmission is 0.5, it indicates that?",
		"options": [{
		  "a": "Channel is very noisy",
		  "b": "No information is received",
		  "c": "Channel is very noisy & No information is received",
		  "d": "None of the mentioned"
		}],
		"answer": "Channel is very noisy & No information is received",
		"score": 0,
		"status": ""
	  },
	  {
		"id": 4,
		"question": "Binary Huffman coding is a",
		"options": [{
		  "a": "Prefix condition code",
		  "b": "Suffix condition code",
		  "c": "Prefix & Suffix condition code",
		  "d": "None of the mentioned"
		}],
		"answer": "Prefix condition code",
		"score": 0,
		"status": ""
	  },
	  {
		"id": 5,
		"question": "The event with minimum probability has least number of bits.",
		"options": [{
		  "a": "True",
		  "b": "False",
		}],
		"answer": "False",
		"score": 0,
		"status": ""
	  },
	  {
		"id": 6,
		"question": "The method of converting a word to stream of bits is called as",
		"options": [{
		  "a": "Binary coding",
		  "b": "Source coding",
		  "c": "Bit coding",
		  "d": "Cipher coding"
		}],
		"answer": "Source coding",
		"score": 0,
		"status": ""
	  },
	  {
		"id": 7,
		"question": "When the base of the logarithm is 2, then the unit of measure of information is",
		"options": [{
		  "a": "Bits",
		  "b": "Bytes",
		  "c": "Nats",
		  "d": "None of the mentioned"
		}],
		"answer": "Bits",
		"score": 0,
		"status": ""
	  },
	  {
		"id": 8,
		"question": "When X and Y are statistically independent, then I (x,y) is",
		"options": [{
		  "a": "1",
		  "b": "0",
		  "c": "Ln 2)",
		  "d": "Cannot be determined",
		}],
		"answer": "0",
		"score": 0,
		"status": ""
	  },
	  {
		"id": 9,
		"question": "he self information of random variable is",
		"options": [{
		  "a": "0",
		  "b": "1",
		  "c": "Infinite",
		  "d": " Cannot be determined"
		}],
		"answer": "Infinite",
		"score": 0,
		"status": ""
	  },
	  {
		"id": 10,
		"question": "Coded system are inherently capable of better transmission efficiency than the uncoded system.",
		"options": [{
		  "a": "True",
		  "b": "False",
		}],
		"answer": "True",
		"score": 0,
		"status": ""
	  },

	]
  }



  var quizApp = function () {

	this.score = 0;
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;


	this.displayQuiz = function (cque) {
	  this.currentque = cque;
	  if (this.currentque < totalque) {
		$("#tque").html(totalque);
		$("#previous").attr("disabled", false);
		$("#next").attr("disabled", false);
		$("#qid").html(quiz.JS[this.currentque].id + '.');


		$("#question").html(quiz.JS[this.currentque].question);
		$("#question-options").html("");
		for (var key in quiz.JS[this.currentque].options[0]) {
		  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {

			$("#question-options").append(
			  "<div class='form-check option-block'>" +
			  "<label class='form-check-label'>" +
			  "<input type='radio' class='form-check-input' name='option'   id='q" + key + "' value='" + quiz
			  .JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
			  quiz.JS[this.currentque].options[0][key] +
			  "</span></label>"
			);
		  }
		}
	  }
	  if (this.currentque <= 0) {
		$("#previous").attr("disabled", true);
	  }
	  if (this.currentque >= totalque) {
		$('#next').attr('disabled', true);
		for (var i = 0; i < totalque; i++) {
		  this.score = this.score + quiz.JS[i].score;
		}
		return this.showResult(this.score);
	  }
	}

	this.showResult = function (scr) {
	  $("#result").addClass('result');
	  $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
	  for (var j = 0; j < totalque; j++) {
		var res;
		if (quiz.JS[j].score == 0) {
		  res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
		} else {
		  res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
		}
		$("#result").append(
		  '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question +
		  '</div>' +
		  '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
		  '<div class="last-row"><b>Score:</b> &nbsp;' + res +

		  '</div>'

		);

	  }
	}

	this.checkAnswer = function (option) {
	  var answer = quiz.JS[this.currentque].answer;
	  option = option.replace(/\</g, "&lt;") //for <
	  option = option.replace(/\>/g, "&gt;") //for >
	  option = option.replace(/"/g, "&quot;")

	  if (option == quiz.JS[this.currentque].answer) {
		if (quiz.JS[this.currentque].score == "") {
		  quiz.JS[this.currentque].score = 1;
		  quiz.JS[this.currentque].status = "correct";
		}
	  } else {
		quiz.JS[this.currentque].status = "wrong";
	  }

	}

	this.changeQuestion = function (cque) {
	  this.currentque = this.currentque + cque;
	  this.displayQuiz(this.currentque);

	}

  }


  var jsq = new quizApp();

  var selectedopt;
  $(document).ready(function () {
	jsq.displayQuiz(0);

	$('#question-options').on('change', 'input[type=radio][name=option]', function (e) {

	  //var radio = $(this).find('input:radio');
	  $(this).prop("checked", true);
	  selectedopt = $(this).val();
	});



  });




  $('#next').click(function (e) {
	e.preventDefault();
	if (selectedopt) {
	  jsq.checkAnswer(selectedopt);
	}
	jsq.changeQuestion(1);
  });

  $('#previous').click(function (e) {
	e.preventDefault();
	if (selectedopt) {
	  jsq.checkAnswer(selectedopt);
	}
	jsq.changeQuestion(-1);
  });