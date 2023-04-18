import { Component } from '@angular/core';
import{state,trigger,style,animate,transition}from'@angular/animations';
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations:[
    trigger('ball',[
    state('A',style({
 left:'100px'
    })),
    state('B',style({
      left:'200px'

    })),
    transition('A=>B',[
      animate('2s')
    ]),
    transition('B=>A',[
      animate('2s')
    ])
  ])
  ]
})
export class AnimationComponent {
boo=false;
me()
{
  this.boo=!this.boo;
}



}
