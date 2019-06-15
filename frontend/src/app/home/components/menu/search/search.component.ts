import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MainService } from '../../../services/main.service'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchControl = new FormControl();
    filteredOptions: Observable<string[]>;

    constructor(
        private mainService: MainService,
        private _snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.mainService.options = this.mainService.kitchen.map(x => x.name);
        this.filteredOptions = this.searchControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
        );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.mainService.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

    onClickSearch(text: string) {
        let placeIndex: number;
        let helpArray: string[];
        placeIndex = this.mainService.options.indexOf(text.toUpperCase());
        if (placeIndex != -1) {
            helpArray = [this.mainService.all[placeIndex].numberSVG];
            this.mainService.changeSelect(helpArray);
        }
        else {
            this._snackBar.open(`Not found!!!`, `ERROR`, {
                duration: 2000,
            });
        }
    }
}

