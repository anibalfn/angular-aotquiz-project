import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  title: string = '';
  questions: any;
  selectedQuestion: any;
  answers: string[] = [];
  selectedAnswer: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  ifFinished: boolean = false;

  ngOnInit(): void {

  }


}
