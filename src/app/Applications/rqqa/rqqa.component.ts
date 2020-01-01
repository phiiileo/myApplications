import { QAService } from './../q-a.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rqqa',
  templateUrl: './rqqa.component.html',
  styleUrls: ['./rqqa.component.css']
})
export class RqqaComponent implements OnInit {

  //Parameters
  Title = "Random Quiz Questions and Answer";
  AnswerStatus = "";
  show = false;
  state = "START";
  Quiz = []
  id; question; optionA; optionB; optionC; answer; currentQ;
  selectedAnswer = "";
  index = 0;
  timeSpent = ""

  constructor(private rqqa: QAService) {
  }

  //Get the questions and answer from the server ( currently from a placeholder)
  ngOnInit() {
    this.rqqa.getQuestion()
      .subscribe(data => {
        this.Quiz = data;
      });

  }

  //startTime  
  startTime() {
    //  let newDate = new Date();
    //  let minute = newDate.getMinutes()
    //  let seconds = newDate.getSeconds();
    //  this.timeSpent = minute + ":" + seconds;
  }

  //Start the Quiz
  start() {
    (this.state === "START") ? this.index = 0 : this.index = 0;

    this.currentQ = this.Quiz[this.index];
    this.id = this.currentQ.id;
    this.question = this.currentQ.question.Q + " ?";
    this.optionA = this.currentQ.question.optA;
    this.optionB = this.currentQ.question.optB;
    this.optionC = this.currentQ.question.optC;
    // this.answer = this.currentQ.answer;
    this.show = true;
    this.state = "RESTART";

    this.startTime()

  }

  //Select answer
  pickAnswer(ans) {
    this.selectedAnswer = ans;
  }

  //submit answer
  submitAnswer(stat) {
    if (this.currentQ.answer == this.selectedAnswer) {
      this.AnswerStatus = "Correct";
      stat.style.color = "darkcyan"

    } else {
      this.AnswerStatus = "Wrong";
      stat.style.color = "red"

    }
    this.answer = ""
  }

  //show the correct answer
  checkAnswer() {
    this.answer = "Right answer is: " + this.currentQ.answer;

  }

  //navigate questions
  changeQuestion(control) {
    let btn = control.target.id;

    //increase this.index by 1 if button clicked is next and reverse if Prev
    (btn === "next") ? this.index++ : this.index--;

    //check for the first and last question
    if (this.index < 0) {
      this.index = 0
    }
    else if (this.index > this.Quiz.length - 1) {
      this.index = this.Quiz.length - 1;
      alert("This is the last question!")
    }

    //Reassign if conditions are met
    else {
      this.currentQ = this.Quiz[this.index];
      this.question = this.currentQ.question.Q + " ?";
      this.optionA = this.currentQ.question.optA;
      this.optionB = this.currentQ.question.optB;
      this.optionC = this.currentQ.question.optC;
    }

    //reset the following value when either of the buttons is clicked
    this.AnswerStatus = "";
    this.answer = "";
    this.selectedAnswer = "";


  }
}
