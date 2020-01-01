import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  //parameters
  Title: string = "Calculator";
  inputValue = "";
  errorMessage = ""
  result = [];

  constructor() { }
  //Calculator Buttons
  buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "*", "-", ".", "/", "+"];
  specialBtn = ["(", ")", "="];
  resetbtn = ["CA", "C"];

  ngOnInit() {
  }

  //Add input to the calculation field
  getValue(event) {
    let val = event.target.value;
    this.inputValue += val;
  }

  //Clear calculation field and result field
  clear(event) {
    this.result = []
    this.errorMessage = " "
    if (event.target.value == "CA") {
      this.inputValue = "";
    }
    else {
      let target = this.inputValue
      this.inputValue = target.substring(0, target.length - 1);
    }
  }

  //Calculate the expression enterred 
  evaluate(event) {
    //Add "+" 
    if (event.target.value !== "=") {
      let val = event.target.value;
      this.inputValue += val;
    }

    //Validate the calculation field
    else {
      const myregx = /[*+-/][*+-/]/;
      const myregx2 = /[*-+/]/;
      let test = myregx.test(this.inputValue);
      let test2 = this.inputValue == "" || this.inputValue == "((" || this.inputValue == "))";
      let split1 = this.inputValue.split(myregx2)
      let test3;
      split1.map(value => {
        let split2 = value.split(".");
        (split2.length > 2) ? test3 = true : test3 = false
      })

      
      if (test || test2 || test3) {
        this.errorMessage = "Enter real numbers only!"
      }
      //Finally Evalaute the calculation field if valid
      else {
        this.result = eval(this.inputValue)
      }

    }

  }

}
