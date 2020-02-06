import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl}from '@angular/forms';
//import { car} from './car';
import {carsParked} from '../data/parkingdata';
import {CarService} from '../car-service.service';
import {SortByPipe} from '../pipes/sort-by.pipe';
@Component({
  selector: 'app-carlisting',
  templateUrl: './carlisting.component.html',
  styleUrls: ['./carlisting.component.css']
})
export class CarlistingComponent implements OnInit {

  cars: Array<any> = carsParked;
  amountCollected:number=0;

  constructor(

    private carservice:CarService
  ) { }

  ngOnInit() {

    this.carservice.newCarSubject.subscribe(
     //data =>console.log(data)
     data =>this.cars.push(data)
    )

  
  }


  deleteCar(index:any){
    this.carservice.deleteCar(index);
    this.amountCollected=this.amountCollected+20;
  }
}
