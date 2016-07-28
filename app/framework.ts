import {Question} from "./question";

export class Framework {
    name: string;
    active: boolean = true;
    answers: { [question: string]: number } = {};
    score: number = null;
    partialScores: number[] = [];

    // constructor(object : Object) {
    //     console.log('constructing');
    // }

    getAnswerValue(question : Question) {
        return this.hasAnswer(question) ? this.answers[question.question] : null;
    }

    hasAnswer(question : Question) {
        var value = this.answers[question.question];
        return value !== null && typeof value !== 'undefined'
    }
}