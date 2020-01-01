import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rqqa',
  templateUrl: './rqqa.component.html',
  styleUrls: ['./rqqa.component.css']
})
export class RqqaComponent implements OnInit {
  Title = "Random Quiz Questions and Answer";
  AnswerStatus = "Correct"
  Quiz = [
    {
      id: 1,
      question: {
        Q: "Is Angular a Javascript library, plugin or framework",
        optA: "It's a framework",
        optB: "It's a pluggin",
        optC: "It's a Library"
      },
      answer: "A"
    },
    {
      id: 2,
      question: {
        Q: "Is React a Javascript library, plugin or framework",
        optA: "It's a framework",
        optB: "It's a pluggin",
        optC: "It's a Library"
      },
      answer: "C"
    }
  ]
  id = this.Quiz[0].id;
  question = this.Quiz[0].question.Q;
  optionA = this.Quiz[0].question.optA;
  optionB = this.Quiz[0].question.optB;
  optionC = this.Quiz[0].question.optC;
  answer = this.Quiz[0].answer;
  constructor() { }
  ngOnInit() {
  }

  start() {
    console.log("working!")
  }
}
