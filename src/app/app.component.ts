import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular1';
  santhosh ="sandy";
  binding=false;
  products=false;


bindingcall(){
 this.binding=true;
}

productscall(){
this.products=true;
this.binding=false;
}


}