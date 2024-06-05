// Import necessary modules from Angular
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  // Constructor with MatSnackBar injection
  constructor(private _snackBar: MatSnackBar) { }

  // Function to open a snackbar notification
  openSnackBar(message: string, action: string = "Ok") {
    // Open a snackbar with the provided message and action
    this._snackBar.open(message, action, {
      // Set the duration of the snackbar
      duration: 2000,
      // Set the vertical position of the snackbar to top
      verticalPosition: 'top',
    });
  }
}
