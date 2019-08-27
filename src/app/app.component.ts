//https://angular-maps.com/guides/getting-started/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SJG App';
  lat = 4.607;
  lng = -74.1024516;

  paises:any = [
    {activo: true, nombre: 'Colombia'},
    {activo: false, nombre: 'Brasil'},
    {activo: true, nombre: 'Argentina'},
    {activo: false, nombre: 'Polonia'},
    {activo: true, nombre: 'Alemania'},
    {activo: true, nombre: 'Francia'},
  ]
}
