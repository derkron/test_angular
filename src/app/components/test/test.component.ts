import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public question :string;
  public answers:any[];
  public answerCorrect:boolean;
  public answerChoosed:boolean;

  constructor(){
    this.question="¿Cual es la capital de Colombia?"
    this.answers=[
      {
        "answer":"Bogota",
        "correct":true
      },
      {
        "answer":"Cali",
        "correct":false
      },
      {
        "answer":"Medellin",
        "correct":false
      },
      {
        "answer":"Barranqquilla",
        "correct":false
      }

    ];
    this.answerCorrect=false;
    this.answerChoosed=false;
    
  }
  ngOnInit(){
  }

  checkAnswerIndex(index){
    this.answerCorrect=this.answers[index].correct;
    this.answerChoosed=true;

  }
  checkAnswersQuestion(){
    if(!this.question){
      return false;
    }
    if(!this.answers || !Array.isArray(this.answers)){
      return false;
    }else{
      /*const correctAnswers=this.answers.filter(function(answer){
        return answer.correct;
      });*/
      if(!(this.answers.length>= 2 && this.answers.length <=4)){
        return false;
      }

      const correctAnswer=this.answers.filter(answer =>answer.correct);
      if(correctAnswer.length !==1){
        return false;
      }
    }
    return true;
  }

  
 

}
