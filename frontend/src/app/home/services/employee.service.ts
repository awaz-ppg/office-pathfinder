import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Employee } from '../model/employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private http: HttpClient) { }

    getEmployee() {
        return this.http.get<Employee[]>(`${environment.apiUrl}Employees`);
    }
}