import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';


@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
constructor(public sharedService:SharedService)
{

}


pipe='angular'
num=845.45331;
num1=0.7;
dat=new Date;
cripto=1200;
pip='sandy';
shot='welcome to the jegans app ';
person1={
  name:'anchor',
  age:21,
  height:5.6
  
};
changing()
{
  this.sharedService.servi=this.pip;
}

}
