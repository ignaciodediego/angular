import { Component } from '@angular/core';
import {Employee} from '../app/models/employee'
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // clase empleado que se crea al crear la clase APPComponent
  employeeArray: Employee[] = [
    {id: 1, name: "Nacho", country: "España"},
    {id: 2, name: "Pedro", country: "España"},
    {id: 3, name: "María", country: "España"}
  ]
  // clase empleado seleccionado, la primera vez que se crea la clase está vacía
  selectedEmployee: Employee = new Employee();

  AddOrEdit(){

    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1; //crear un id nuevo para un empleado nuevo
      this.employeeArray.push(this.selectedEmployee); // Insertar el empleado en nuestra BBDD particular, el array
    }    
    this.selectedEmployee = new Employee(); //borrar el empleado insertado para que no aparezca en las cajitas del form
  }

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;

  }

  Delete(){
    if(confirm('Estas seguro de querer eliminarlo?')){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
    
  }
}
