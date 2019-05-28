import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MainService } from '../../../services/main.service'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    myControl = new FormControl();
    filteredOptions: Observable<string[]>;

    constructor(
        private mainService: MainService) {
    }

    ngOnInit() {
        this.mainService.options = this.mainService.kitchen.map(x => x.name);
        console.log(this.mainService.options);
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
        );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.mainService.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
}