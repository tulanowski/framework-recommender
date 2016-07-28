import { Component, EventEmitter, Output } from '@angular/core';
import {Framework} from "./framework";
import {DataStorageService} from "./data-storage.service";

@Component({
    selector: 'frawmework-form',
    template: `
        <form class="form-inline" (ngSubmit)="onSubmit()">
            <input class="form-control" placeholder="Framework name" [(ngModel)]="framework.name" required>
            <input class="btn btn-primary" type="submit" value="Add">
        </form>
    `,
    directives: [],
})

export class FrameworkForm {
    @Output() onAdd = new EventEmitter<Framework>();

    framework = new Framework();
    dataStorage : DataStorageService;

    constructor(dataStorage : DataStorageService) {
        this.dataStorage = dataStorage;
    }

    onSubmit() {
        console.log(this.framework.name);
        this.dataStorage.addFramework(this.framework);
        this.onAdd.emit(this.framework);
        this.framework = new Framework();
    }
}