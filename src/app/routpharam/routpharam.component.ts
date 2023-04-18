import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routpharam',
  templateUrl: './routpharam.component.html',
  styleUrls: ['./routpharam.component.scss']
})
export class RoutpharamComponent {
  id:any='';
constructor(public route:ActivatedRoute){
  this.id=this.route.snapshot.paramMap.get('id');

}

}
