import { Injectable } from '@angular/core';
import {DataStorageService} from "./data-storage.service";
import {Framework} from "./framework";
import {Question} from "./question";

@Injectable()
export class EvaluatorService {

    private dataStorage: DataStorageService;

    constructor(ds : DataStorageService) {
        this.dataStorage = ds;
    }

    evaulate(frameworks : Framework[], questions : Question[]) {

        for(var i=0; i < questions.length; i++) {
            var question : Question = questions[i];
            question.max = this.maxAnswer(frameworks, question);
        }

        for(var i=0; i < frameworks.length; i++) {
            var framework : Framework = frameworks[i];

            if (!framework.active) {
                continue;
            }

            var answers = 0;
            var sum = 0.0;

            for(var j=0; j < questions.length; j++) {
                var question : Question = questions[j];

                if (framework.hasAnswer(question) && question.max > 0) {
                    var partialScore = framework.getAnswerValue(question) / question.max * question.weight;
                    partialScore = Math.round(partialScore * 100) / 100;
                    framework.partialScores[question.question] = partialScore;
                    sum += partialScore;
                    answers++;
                } else {
                    framework.partialScores[question.question] = null;
                }
            }

            framework.score = answers ? sum : null;
        }
    }

    private maxAnswer(frameworks : Framework[], question: Question) {
        return Math.max.apply(Math, frameworks.map(function(framework: Framework){
            return framework.hasAnswer(question) ? 0 + framework.getAnswerValue(question) : null;
        }));
    }

}