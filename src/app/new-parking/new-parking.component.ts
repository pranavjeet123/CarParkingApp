import { Component, OnInit ,ViewChild} from '@angular/core';
import {CarService} from '../car-service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-parking',
  templateUrl: './new-parking.component.html',
  styleUrls: ['./new-parking.component.css']
})
export class NewParkingComponent implements OnInit {


@ViewChild('newcarparkingform', {static: false}) newcarparkingform:NgForm;
  showForm =  true;
  showsearchForm =  true;
   toggleForm(){
  this.showForm = !this.showForm;

}

togglesearchForm(){
  this.showsearchForm = !this.showsearchForm;

}

sortFields:Array<string>=['Black','Green','Blue','Silver','Red','White'];

availableSlots:number=10-this.carservice.getAvailableCars();

  constructor(

    private carservice : CarService
  ) { }

  ngOnInit() {

    // this.availableSlots= 10-this.carservice.getAvailableCars();
  }

  onSubmit(data:any):void{
  

  // console.log(data);
     this.carservice.addCar(data);
     this.newcarparkingform.reset();
  }

}
