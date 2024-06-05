// Import necessary modules from Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Constructor with HttpClient injection
  constructor(private httpclient:HttpClient) { }

  // Function to add an employee
  addEmployee(data:any):Observable<any>{
    // POST request to add an employee
    return this.httpclient.post("http://localhost:3000/employees",data);
  }

  // Function to get employee list
  getEmployee():Observable<any>{
    // GET request to fetch employee list
    return this.httpclient.get("http://localhost:3000/employees");
  }

  // Function to delete an employee
  deleteEmployee(id: number): Observable<any> {
    // DELETE request to delete an employee by ID
    return this.httpclient.delete(`http://localhost:3000/employees/${id}`);
  }

  // Function to update an employee
  updateEmployee(id:number,data:any):Observable<any>{
    // PUT request to update an employee by ID
    return this.httpclient.put(`http://localhost:3000/employees/${id}`,data);
  }
}
