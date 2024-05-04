import { Component, Inject } from '@angular/core';
import { AgGridAngular } from '@ag-grid-community/angular';
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AgGridAngular],
 // imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private userService: UserService){

  }
	title = 'Home Component';

	columnDefs: any= [
		{ headerName: 'Make', field: 'make' },
		{ headerName: 'Model', field: 'model' },
		{ headerName: 'Price', field: 'price' }
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 }
	];  

  // columnDefs: any= [
	// 	{ headerName: 'Id', field: 'id' },
	// 	{ headerName: 'Name', field: 'name' },
	// 	{ headerName: 'Email', field: 'email' }
	// ];

  // rowData : any[]= []
 

  ngOnInit(){
    this.userService.getUsers().subscribe((data) => {
      console.log(data)
      //this.rowData.push(data)
    })
  }

}
