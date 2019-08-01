import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchObject } from '../../../model/search-object';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
     filteredOptions: SearchObject[];
     status: boolean = true;
     kitchenStatus: boolean = false;

    constructor(
        private mainService: MainService,
        private _snackBar: MatSnackBar) {
            this.mainService.optionsStatus$.subscribe(() => this.filteredOptions = this.mainService.options.filter(x => x.text != "BRAK NAZWY"));
    }

    ngOnInit() {}

    onClickSearch(text: string) {
        let optionIndex: number = -1;
        this.mainService.options.forEach((x,index) => {if(text.toUpperCase() == x.text.toUpperCase()) optionIndex = index;});
        let placeIndex: number = -1;
        let helpArray: string[];
        if(optionIndex != -1){
        this.mainService.all.forEach((x,index) => {if(this.mainService.options[optionIndex].id == x.id) placeIndex = index;});
        }
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

    changeStatus() {
        this.status = !this.status;
    }

    autocomplete(text: string){
        this.filteredOptions = this.mainService.options.filter(x => x.text.includes(text.toUpperCase()))
    }

    changeKitchenStatus(){
        this.kitchenStatus = !this.kitchenStatus;
    }
    
}

