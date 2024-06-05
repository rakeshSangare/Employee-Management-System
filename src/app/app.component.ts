// Importing necessary modules and services
import { Component, OnInit ,ViewChild} from '@angular/core';
import{ MatDialog} from '@angular/material/dialog';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { EmployeeService } from './employee.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SnackbarService } from './snackbar.service';

@Component({
  // Component selector
  selector: 'app-root',
  // Component template file
  templateUrl: './app.component.html',
  // Component styles file
  styleUrl: './app.component.css' // Corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent implements OnInit{
  // Title for the application
  title = 'Crud_Application';

  // Array of displayed columns in the table
  displayedColumns: string[] = ['id','firstName','lastName','email','dob','gender','education','company','experience','package','action'];

  // Data source for the table
  dataSource !: MatTableDataSource<any>;

  // Reference to the paginator component
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Reference to the sort component
  @ViewChild(MatSort) sort !: MatSort;

  // Constructs the component with references to services and modules.
  constructor(
              // Reference to the MatDialog service for opening dialog windows
              private _dialog:MatDialog, 
              // Reference to the EmployeeService for CRUD operations
              private emp_service:EmployeeService, 
              // Reference to the SnackbarService for displaying snack bar notifications
              private snackbarService: SnackbarService,
            ){}

  ngOnInit(): void {
    // Fetch employee list on component initialization
    this.getEmployeeList();
  }

  // Function to open add/edit employee form dialog
  openAddEditForm(){
    // Opens the dialog window for adding or editing an employee
    const dialogRef = this._dialog.open(AddEditEmployeeComponent)
    dialogRef.afterClosed().subscribe({
      next : (val) =>{
        if(val){
          // Refresh employee list if dialog result is true
          this.getEmployeeList();
        }
      }
    });
  }

  // Function to fetch employee list
  getEmployeeList(){
    // Get employee list from the service
    this.emp_service.getEmployee().subscribe({
      next:(response) =>{
          // Set data source for the table
          this.dataSource = new MatTableDataSource(response);
          // Set sort and paginator for the table
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      },
      error:(err) =>{
        // Log error if any
        console.log(err);
      }
    });
  }

  // Function to apply filter on the table
  applyFilter(event: Event) {
    // Get filter value from input
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply filter to the data source
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // If paginator is available, navigate to the first page
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Function to delete an employee
  deleteEmployee(id:number){
    // Delete employee using the service
    this.emp_service.deleteEmployee(id).subscribe({
      next: (response) => {
        // Show success notification
        this.snackbarService.openSnackBar("Employee deleted successfully","Done")
        // Refresh employee list
        this.getEmployeeList();
      },
      error:(err) =>{
        // Log error if any
        console.log(err);
      }
    });
  }

  // Function to open edit employee dialog
  openEditEmployee(data:any){
    // Open edit employee dialog with pre-filled data
    const dialogRef =  this._dialog.open(AddEditEmployeeComponent,{data});
    dialogRef.afterClosed().subscribe({
      next : (val) =>{
        if(val){
          // Refresh employee list if dialog result is true
          this.getEmployeeList();
        }
      }
    });
  }
}
