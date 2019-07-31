import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MainService } from '../../../services/main.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchObject } from '../../../model/search-object';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    // searchControl = new FormControl();
     filteredOptions: SearchObject[];

    constructor(
        private mainService: MainService,
        private _snackBar: MatSnackBar) {
            setTimeout(() => {this.filteredOptions = this.mainService.options; console.log(this.filteredOptions);
                console.log(this.mainService.all);}, 30000)
    }

    ngOnInit() {
        // this.filteredOptions = this.searchControl.valueChanges.pipe(
        //     startWith(''),
        //     map(value => this._filter(value))
        // );
        // console.log(this.filteredOptions);
    }

    // private _filter(value: string): string[] {
    //     const filterValue = value.toLowerCase();

    //     return this.mainService.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    // }

    onClickSearch(text: string) {
        let optionIndex: number = -1;
        this.mainService.options.forEach((x,index) => {if(text.toUpperCase() == x.text.toUpperCase()) optionIndex = index;});
        let placeIndex: number = -1;
        let helpArray: string[];
        this.mainService.all.forEach((x,index) => {if(this.mainService.options[optionIndex].id == x.id) placeIndex = index;});
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

    onClickSelect() {
        this.filteredOptions = this.mainService.options.filter(x => x.type == "kitchen");
    }
}

