import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MainService } from '../../../services/main.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchObject } from '../../../model/search-object';
import { Elements } from '../../../../constants/elements';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @ViewChild("searchPlace") inputEl: ElementRef;
    filteredOptions: SearchObject[];
    filteredKitchens: SearchObject[];
    filteredOffices: SearchObject[];
    filteredRooms: SearchObject[];
    filteredDesks: SearchObject[];
    status: boolean = true;
    kitchenStatus: boolean = false;
    officeStatus: boolean = false;
    roomStatus: boolean = false;
    deskStatus: boolean = false;

    constructor(
        private mainService: MainService,
        private _snackBar: MatSnackBar) {
            this.mainService.optionsStatus$.subscribe(() => {
            this.filteredOptions = this.mainService.options.filter(x => x.text != "BRAK NAZWY");
            this.filteredKitchens = this.filteredOptions.filter(x => x.type == Elements.kitchen);
            this.filteredOffices = this.filteredOptions.filter(x => x.type == Elements.office);
            this.filteredRooms = this.filteredOptions.filter(x => x.type == Elements.room);
            this.filteredDesks = this.filteredOptions.filter(x => x.type == Elements.employee);         
        });
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

    makeSearchListEnabled() {
        this.status = false;
    }

    makeSearchListDisabled() {
        setTimeout(() => {if(document.activeElement != this.inputEl.nativeElement) this.status = true;}, 300)
    }

    autocomplete(text: string){
        this.filteredOptions = this.mainService.options.filter(x => x.text.includes(text.toUpperCase()));
        this.filteredKitchens = this.filteredOptions.filter(x => x.type == Elements.kitchen);
        this.filteredOffices = this.filteredOptions.filter(x => x.type == Elements.office);
        this.filteredRooms = this.filteredOptions.filter(x => x.type == Elements.room);
        this.filteredDesks = this.filteredOptions.filter(x => x.type == Elements.employee);
    }

    changeKitchenStatus(){
        this.kitchenStatus = !this.kitchenStatus;
        this.inputEl.nativeElement.focus()
    }

    changeOfficeStatus(){
        this.officeStatus = !this.officeStatus;
        this.inputEl.nativeElement.focus()
    }

    changeRoomStatus(){
        this.roomStatus = !this.roomStatus;
        this.inputEl.nativeElement.focus()
    }

    changeDeskStatus(){
        this.deskStatus = !this.deskStatus;
        this.inputEl.nativeElement.focus()
    }
    
}

