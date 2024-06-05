// Importing necessary modules and services
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../snackbar.service';

@Component({
  // Component selector
  selector: 'app-add-edit-employee',
  // Component template file
  templateUrl: './add-edit-employee.component.html',
  // Component styles file
  styleUrls: ['./add-edit-employee.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class AddEditEmployeeComponent implements OnInit {

  // Array to store education levels
  education:string[]=['SSC','HSC','Diploma','Graduate','Post Graduate']

  // Form group for employee details
  empForm !:FormGroup;

  constructor(
              // FormBuilder for creating form
              private form_builder:FormBuilder, 
              // Employee service for CRUD operations
              private emp_service:EmployeeService, 
              // Dialog reference for managing dialog
              private dialog_ref:MatDialogRef<AddEditEmployeeComponent>,
              // Injected data for pre-filling form (if available)
              @Inject(MAT_DIALOG_DATA) public data:any,
              // Service for displaying snack bar notifications
              private snackbarService:SnackbarService,
            ){

    // Initialize the form group with form controls
    this.empForm=this.form_builder.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:'',
    });
  }

  ngOnInit(): void {
    // Patch form values with data if available
    this.empForm.patchValue(this.data);
  }

  // Function to handle form submission
  onSubmit(){
    if(this.empForm.valid) {
      if(this.data) {
        // Update employee details if data is available
        this.emp_service.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next:(val:any) =>{
            // Show success notification
            this.snackbarService.openSnackBar("Employee details updated","Ok")
            // Close the dialog
            this.dialog_ref.close(true);
          },
          error:(err:any) =>{
            // Log error
            console.log(err);
          },
        })
      } else {
        // Add new employee if no data is available
        this.emp_service.addEmployee(this.empForm.value).subscribe({
          next:(val:any) =>{
            // Show success notification
            this.snackbarService.openSnackBar("Employee added successfully","Ok")
            // Close the dialog
            this.dialog_ref.close(true);
          },
          error:(err:any) =>{
            // Log error
            console.log(err);
          },
        })
      }
    }
  }

}
