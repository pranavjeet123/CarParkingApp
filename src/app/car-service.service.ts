import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {carsParked} from './data/parkingdata';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  public newCarSubject = new Subject <any>();

  addCar(data:any){
    return this.newCarSubject.next(data);
  }

  getAvailableCars(){

    return carsParked.length;
  }

  deleteCar(id:number){
    carsParked.splice(id,1);
  }

  constructor() { }
}
