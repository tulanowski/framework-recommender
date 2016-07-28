import {Component} from '@angular/core';

import {DataStorageService} from './data-storage.service';
import {Question} from './question';
import {EvaluatorService} from './evaluator.service';
import {Framework} from './framework';
import {FrameworkForm} from './framework-form.component';
import {QuestionForm} from './question-form.component';
import {QUESTION_WEIGHTS} from './config';

@Component({
    selector: 'frameworks-grid',
    providers: [DataStorageService, EvaluatorService],
    templateUrl: 'app/framework-grid.component.html',
    directives: [FrameworkForm, QuestionForm]
})

export class FrameworksGrid {
    public test1:boolean = true;
    public frameworks = [];
    public questions:Question[] = [];
    public answers = {};

    private availableWeights:Number[] = QUESTION_WEIGHTS;
    private dataStorage:DataStorageService;
    private evaluator:EvaluatorService;

    constructor(private ds:DataStorageService, e:EvaluatorService) {
        this.dataStorage = ds;
        this.evaluator = e;
        this.frameworks = ds.loadFrameworks();
        this.questions = ds.loadQuestions();
        this.evaluator.evaulate(this.frameworks, this.questions);
    };

    onAnswerChange(framework, question, value) {
        if (typeof value === 'string') {
            if (value === '') {
                value = null;
            } else {
                value = value === '1';
            }
        }
        framework.answers[question.question] = value;
        this.evaluator.evaulate(this.frameworks, this.questions);
        this.dataStorage.saveFrameworks(this.frameworks);
    }

    boolean2selectValue(value) {
        if (value) {
            return '1';
        }
        if (value === false) {
            return '0';
        }
        return '';
    }

    onWeightChange(question:Question, value) {
        question.weight = value;
        this.dataStorage.saveQuestions(this.questions);
        this.evaluator.evaulate(this.frameworks, this.questions);
    }

    onFrameworkChange(framework:Framework, value) {
        framework.active = value;
        this.dataStorage.saveFrameworks(this.frameworks);
        this.evaluator.evaulate(this.frameworks, this.questions);
    }

    onAdd() {
        this.frameworks = this.dataStorage.loadFrameworks();
        this.questions = this.dataStorage.loadQuestions();
        this.evaluator.evaulate(this.frameworks, this.questions);
    }

    onFrameworkRemove(framework:Framework) {
        if (confirm('Are you sure that you want to remove \'' + framework.name + '\' framework?')) {
            this.dataStorage.removeFramework(framework);
            this.frameworks = this.dataStorage.loadFrameworks();
            this.evaluator.evaulate(this.frameworks, this.questions);
        }
    }

    onQuestionRemove(question:Question) {
        if (confirm('Are you sure that you want to remove \'' + question.question + '\' question?')) {
            this.dataStorage.removeQuestion(question);
            this.questions = this.dataStorage.loadQuestions();
            this.evaluator.evaulate(this.frameworks, this.questions);
        }
    }
}