//https://angular-maps.com/guides/getting-started/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SJG App';
  lat = 4.7529;
  lng = -74.097;

  Countries:any = [
    {status: true, name: 'Colombia', location:1},
    {status: false, name: 'Brasil' , location:1},
    {status: true, name: 'Argentina', location:2},
    {status: false, name: 'Poland', location:3},
    {status: true, name: 'Germany', location:3},
    {status: false, name: 'France', location:3},
  ]
}
