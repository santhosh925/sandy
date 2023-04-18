import { Component, Input } from '@angular/core';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
 // value=5;

@Input()
  val=0;
  

  getArrayWithnElements(n:number):any{
    
    let ah:any[]=[];
    let i;

    for(i=1;i<=n;i++){
    ah.push(i);
    
    }
    return ah;
  }
 str(val:any){
this.val=val;
console.log(val);
 }


 ngOnInit()
 {
   console.log('rating ngOnInit called');
 }
 ngOnDestroy()
 {
   console.log('rating ngOnDestroy called');
 }
 ngOnChanges()
 {
   console.log('rating ngOnChanges called');
 }
 
ngDoCheck()
{
  console.log('rating ngDoCheck called')
}



}
