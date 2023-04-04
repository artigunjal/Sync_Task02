var quiz = {
"JS": [
{
"id": 1,
"question": "Which is the smallest ocean in the World?",
"options": [
{
"a": "Indian",
"b": "Pacific",
"c": "Atlantic",
"d": "Arctic"
}
],
"answer": "Arctic",
"score": 0,
"status": ""
},
{
"id": 2,
"question": "Which country gifted 'Statue of Libery' to USA in 1986?",
"options": [
{
"a": "France",
"b": "Canada",
"c": "Brazil"
}
],
"answer": "France",
"score": 0,
"status": ""
},
{
"id": 3,
"question": "In which ocean 'Bermuda Traingle' is located?",
"options": [
{
"a": "Atlantic",
"b": "Indian",
"c": "Pacicfic"
}
],
"answer": "Atlantic",
"score": 0,
"status": ""
},
{
"id": 4,
"question": "Dead Sea is located between which two countaries?",
"options": [
{
"a": "Jordan and Sudan",
"b": "Jordan and Israel",
"c": "Turkey and UAE"
}
],
"answer": "Jordan and Israel",
"score": 0,
"status": ""
},
{
"id": 5,
"question": "Which country is known as the 'playground of Europe'?",
"options": [
{
"a": "Austria",
"b": "Holland",
"c": "Switzerland",
}
],
"answer": "Switzerland",
"score": 0,
"status": ""
},
{
"id": 6,
"question": "Which country is known as the 'Land of Rising Sun' ?",
"options": [
{
"a": "Japan",
"b": "New Zealand",
"c": "Fiji",
}
],
"answer": "Japan",
"score": 0,
"status": ""
},
{
"id": 7,
"question": "Which country is known as the 'Land of Thunderbolts'?",
"options": [
{
"a": "China",
"b": "Bhutan",
"c": "Mongolia",
}
],
"answer": "Bhutan",
"score": 0,
"status": ""
},
{
"id": 8,
"question": "Which continent has the highest number of countries?",
"options": [
{
"a": "Asia",
"b": "Europe",
"c": "North America",
"d": "Africa",
}
],
"answer": "Africa",
"score": 0,
"status": ""
},
{
"id": 9,
"question": "In which country, white elephant is found?",
"options": [
{
"a": "India",
"b": "Sri Lanka",
"c": "Thailand",
"d": "Malaysia"
}
],
"answer": "Thailand",
"score": 0,
"status": ""
},
{
"id": 10,
"question": "Which country is also known as the 'Land of Thoudand Lakes'?",
"options": [
{
"a": "Iceland",
"b": "Norway",
"c": "Finland",
"d": "Switzerland",
}
],
"answer": "Finland",
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
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
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
'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.JS[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
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