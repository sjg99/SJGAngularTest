import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jorge\'s App';
  var2='Jorge Morales';
  var3=19;
  habilitacion=false;
  nombre:string = '';

  paises:any = [
    {nombre: 'Colombia'},
    {nombre: 'Brasil'},
    {nombre: 'Argentina'},
    {nombre: 'Polonia'},
    {nombre: 'Alemania'},
    {nombre: 'Francia'},
  ]


  constructor(){
    this.cons();
  }

  cons(){
    this.habilitacion=!this.habilitacion;
    setTimeout(() => {
      this.habilitacion = !this.habilitacion;
    }, 3000)
  }

  ejecutar(){
    this.var3=this.var3+1;
  }

  restart(){
    this.cons();
    this.var3=19;
  }

}
