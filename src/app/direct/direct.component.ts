import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';
@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.scss']
})
export class DirectComponent {
  star='moon';
constructor(public sharedService:SharedService){

}
changing()
{
  this.sharedService.servi=this.star;
}

}
