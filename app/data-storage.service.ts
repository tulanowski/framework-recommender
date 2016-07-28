import {Injectable} from '@angular/core';
import {Question} from './question';
import {Framework} from './framework';
import {DEFAULT_FRAMEWORKS, DEFAULT_QUESTIONS, DEFAULT_DATA} from './config';

@Injectable()
export class DataStorageService {

    loadFrameworks() {
        var frameworksJSON = localStorage.getItem('frameworks');
        if (!frameworksJSON) {
            frameworksJSON = JSON.stringify(DEFAULT_DATA);
            localStorage.setItem('frameworks', frameworksJSON);
        }

        var frameworks = JSON.parse(frameworksJSON);
        return frameworks.map(this.loadFramework);
    }

    loadQuestions() {
        var questionsJSON = localStorage.getItem('questions');
        if (!questionsJSON) {
            questionsJSON = JSON.stringify(DEFAULT_QUESTIONS);
            localStorage.setItem('questions', questionsJSON);
        }

        var questions = JSON.parse(questionsJSON);
        return questions.map(this.loadQuestion);
    }

    saveFrameworks(frameworks) {
        localStorage.setItem('frameworks', JSON.stringify(frameworks));
    }

    saveQuestions(questions) {
        localStorage.setItem('questions', JSON.stringify(questions));
    }

    loadFramework(object:Object) {
        let framework = new Framework();
        Object.assign(framework, object);
        return framework;
    }

    loadQuestion(object:Object) {
        let question = new Question();
        Object.assign(question, object);
        return question;
    }

    addFramework(framework:Framework) {
        var frameworks = this.loadFrameworks();
        frameworks.push(framework);
        this.saveFrameworks(frameworks);
    }

    removeFramework(framework:Framework) {
        var frameworks = this.loadFrameworks();
        frameworks = frameworks.filter(function (f:Framework) {
            return f.name !== framework.name;
        });
        this.saveFrameworks(frameworks);
    }

    addQuestion(question:Question) {
        var questions = this.loadQuestions();
        questions.push(question);
        this.saveQuestions(questions);
    }

    removeQuestion(question:Question) {
        var questions = this.loadQuestions();
        questions = questions.filter(function (q:Question) {
            return q.question !== question.question;
        });
        this.saveQuestions(questions);
    }
}