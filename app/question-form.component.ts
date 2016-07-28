import { Component, EventEmitter, Output } from '@angular/core';
import {DataStorageService} from "./data-storage.service";
import {Question} from "./question";
import {QUESTION_WEIGHTS} from './config';

@Component({
    selector: 'question-form',
    template: `
        <form class="form-inline" (ngSubmit)="onSubmit()">
            <input class="form-control" placeholder="Aspect" [(ngModel)]="question.question" required>
            <select class="form-control input-sm" required [(ngModel)]="question.weight">
                <option value="null">Select weight</option>
                <option *ngFor="let weight of availableWeights" [value]="weight">{{weight}}</option>
            </select>
            <select class="form-control input-sm" required [(ngModel)]="question.type">
                <option value="">Select type</option>
                <option value="number">Number</option>
                <option value="boolean">Boolean</option>
            </select>
            <input class="btn btn-primary" type="submit" value="Add">
        </form>
    `,
    directives: [],
})

export class QuestionForm {
    @Output() onAdd = new EventEmitter<Question>();

    question = new Question();
    dataStorage : DataStorageService;
    availableWeights:number[] = QUESTION_WEIGHTS;

    constructor(dataStorage : DataStorageService) {
        this.dataStorage = dataStorage;
        this.question.weight = null;
        this.question.type = '';
    }

    onSubmit() {
        this.dataStorage.addQuestion(this.question);
        this.onAdd.emit(this.question);
        this.question = new Question();
    }
}