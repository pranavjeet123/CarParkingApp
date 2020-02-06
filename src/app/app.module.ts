import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarlistingComponent } from './carlisting/carlisting.component';
import { HeaderComponent } from './header/header.component';
import { NewParkingComponent } from './new-parking/new-parking.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule }    from '@angular/common/http';
import {CarService} from './car-service.service';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarlistingComponent,
    HeaderComponent,
    NewParkingComponent,
    SearchComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
