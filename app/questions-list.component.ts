// import {Component} from '@angular/core';
// import {Question} from './question';
//
// @Component({
//     selector: 'questions-list',
//     template: `
//         <div *ngFor="let question of questions">
//             <label>
//                 {{ question }}
//                 <select [(ngModel)]="questionWeights[question]">
//                     <option *ngFor="let weight of availableWeights" [value]="weight">{{weight}}</option>
//                 </select>
//             </label>
//         </div>
//     `,
// })
//
// export class QuestionsList {
//     public questions: Question[] = [];
//     private availableWeights: Number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
//     constructor(private dataStorage: DataStorageService) {
//         this.questions = dataStorage.getQuestions();
//     };
// }