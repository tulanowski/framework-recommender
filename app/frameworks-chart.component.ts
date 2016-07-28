import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

import {DataStorageService} from "./data-storage.service";
import {EvaluatorService} from "./evaluator.service";
import {Framework} from "./framework";

@Component({
    selector: 'frameworks-chart',
    providers: [DataStorageService, EvaluatorService],
    directives: [CHART_DIRECTIVES],
    template: `
        <div class="row">
            <div class="col-xs-12">
                <chart [options]="options"></chart>
            </div>
        </div>
    `,
})

export class FrameworksChart {
    private options:Object;
    private dataStorage:DataStorageService;

    constructor(dataStorage:DataStorageService, evaluator:EvaluatorService) {

        this.dataStorage = dataStorage;

        var frameworks = this.getActiveFrameworks();
        var questions = dataStorage.loadQuestions();
        evaluator.evaulate(frameworks, questions);

        var series = [];
        var categories = [];
        var hasNegative = false;

        for (var j = 0; j < frameworks.length; j++) {
            var framework:Framework = frameworks[j];
            categories.push(framework.name);
        }

        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];

            if (question.weight == 0) {
                continue;
            }
            hasNegative = hasNegative || question.weight < 0;

            let serie = {
                name: question.question,
                type: 'column',
                data: []
            };
            for (var j = 0; j < frameworks.length; j++) {
                var framework:Framework = frameworks[j];
                serie.data.push(framework.partialScores[question.question]);
            }
            series.push(serie);
        }

        if (hasNegative) {
            let finalScore = {
                name: 'Final score',
                type: 'spline',
                data: []
            };
            for (var j = 0; j < frameworks.length; j++) {
                var framework:Framework = frameworks[j];
                finalScore.data.push(framework.score);
            }
            series.push(finalScore);
        }

        this.options = {
            chart: {
                type: 'column',
                width: 1000,
                height: 550,
            },
            title: {text: 'Frameworks Evaluation'},

            series: series,
            xAxis: {categories: categories},
            yAxis: {
                title: {text: 'Score'}
            },
            plotOptions: {
                column: {stacking: 'normal'}
            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical'
            }
        };
    }

    getActiveFrameworks():Framework[] {
        var frameworks = this.dataStorage.loadFrameworks();
        var activeFrameworks:Framework[] = [];
        for (var j = 0; j < frameworks.length; j++) {
            var framework:Framework = frameworks[j];
            if (framework.active) {
                activeFrameworks.push(framework);
            }
        }
        return activeFrameworks;
    }

}