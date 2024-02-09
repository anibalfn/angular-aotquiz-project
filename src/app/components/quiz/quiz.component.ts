import { Component, OnInit } from '@angular/core';
import quiz_questions from "../../../assets/data/quiz_questions.json";
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
    if (quiz_questions) {
      this.ifFinished = false;
      this.title = quiz_questions.title;

      this.questions = quiz_questions.questions;
      this.selectedQuestion = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;

    }
  }

  pressedButton(value: string) {
    this.answers.push(value)
  }

  async nextQuestion() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.selectedQuestion = this.questions[this.questionIndex]
    } else {
      this.ifFinished = true;
    }
  }


}
