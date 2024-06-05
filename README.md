# Employee Management System

A CRUD (Create, Read, Update, Delete) application built with Angular and Angular Material for managing employee records efficiently.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Employee Management System is a web application designed to streamline the process of managing employee records. It allows users to perform operations such as adding new employees, editing existing employee details, deleting employees, and viewing a list of employees with various filtering and sorting options.

## Features

- Add new employee records
- Edit existing employee records
- Delete employee records
- View a list of all employees
- Filter employees by name or other criteria
- Sort employees by various fields
- Paginate the employee list
- Snackbar notifications for user feedback

## Technologies Used

- Angular
- Angular Material
- TypeScript
- HTML
- CSS
- RxJS
- JSON Server (for mock backend)

## Installation

1. Clone the repository:
   
   git clone https://github.com/yourusername/employee-management-system.git
   
2. Navigate to the project directory:
   
   cd employee-management-system
   
3. Install the dependencies:
   
   npm install
   

## Usage

1. Start the mock backend server:
   
   npx json-server --watch db.json
   
2. Start the Angular development server:
   
   ng serve
   
3. Open your browser and navigate to `http://localhost:4200`.

## Project Structure


employee-management-system/
├── src/
│   ├── app/
│   │   ├── add-edit-employee/
│   │   │   ├── add-edit-employee.component.html
│   │   │   ├── add-edit-employee.component.ts
│   │   │   ├── add-edit-employee.component.css
│   │   ├── services/
│   │   │   ├── employee.service.ts
│   │   │   ├── snackbar.service.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.component.css
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── angular.json
├── package.json
├── README.md
├── tsconfig.json
└── db.json


## Contributing

Contributions are welcome! Please fork this repository and submit pull requests for any features, bug fixes, or enhancements.

1. Fork the project.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.



### Notes:

1. Make sure to replace the repository URL in the `git clone` command with the actual URL of your repository.
2. Include a `db.json` file for the mock backend server using JSON Server. Here’s an example:

{
  "employees": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "dob": "1990-01-01",
      "gender": "male",
      "education": "Graduate",
      "company": "ABC Corp",
      "experience": 5,
      "package": 600000
    },
    ...
  ]
}


3. Adjust the `Contributing` section based on your preferred contribution guidelines.
4. Include a `LICENSE` file in your repository for the MIT License or any other license you choose.