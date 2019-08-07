import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MainService } from '../../../services/main.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchObject } from '../../../model/search-object';
import { Elements } from '../../../../constants/elements';
import { Types } from '../../../../constants/types';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @ViewChild("searchPlace") inputEl: ElementRef;
    options: SearchObject[][];
    filteredOptions: SearchObject[][];
    status: boolean = false;
    listOptionsStatus: boolean[] = [false, false, false, false];
    Types = Types;
    

    constructor(
        private mainService: MainService,
        private _snackBar: MatSnackBar) {
            this.mainService.options.subscribe((y) => {
            this.options = y.map(x => x.filter(y => y.text != "BRAK NAZWY"));
            this.filteredOptions = this.options;  
        });
    }

    ngOnInit() {}

    onClickSearch(text: string) {
        let firstOptionIndex: number;
        let secondOptionalIndex: number;
        let placeIndex: number;
        let helpArray: string[];
        firstOptionIndex = this.options.findIndex(y => y.findIndex(x => text.toUpperCase() == x.text.toUpperCase()) != -1);
        if(firstOptionIndex != -1){
        secondOptionalIndex = this.options[firstOptionIndex].findIndex(x => text.toUpperCase() == x.text.toUpperCase());
        placeIndex = this.mainService.all.findIndex(x => this.options[firstOptionIndex][secondOptionalIndex].id == x.id);
        if (placeIndex != -1) {
            helpArray = [this.mainService.all[placeIndex].numberSVG];
            this.mainService.changeSelect(helpArray);
        }
    }
        else {
            this._snackBar.open(`Not found!!!`, `ERROR`, {
                duration: 2000,
            });
        }
    }

    displaySearchList() {
        this.status = true;
    }
 
    hideSearchList() {
     setTimeout(() => {if(document.activeElement != this.inputEl.nativeElement) this.status = false;}, 300)  
    }

    autocomplete(text: string){
        this.filteredOptions = this.options.map(y => y.filter(x => x.text.includes(text.toUpperCase())));
    }

    changeListOptionsStatus(index: number){
        this.inputEl.nativeElement.focus()
        this.listOptionsStatus[index] = !this.listOptionsStatus[index];
    }

    fillSearch(text: string){
        document.querySelector(".search").value = text;
    }
    
}

