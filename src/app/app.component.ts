import { Component } from '@angular/core';
import {Employee} from '../app/models/employee'
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employeeArray: Employee[] = [
    {id: 1, name: "Nacho", country: "España"},
    {id: 2, name: "Pedro", country: "España"},
    {id: 3, name: "María", country: "España"}
  ]
}
