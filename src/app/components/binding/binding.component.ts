import { Component } from "@angular/core";

@Component({
    selector: 'binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.scss']
  })
  export class BindingComponent{
    santhosh ="sandy";
    hero="villan"
    show=false;
    more=true;
    array=[10,20,30,40,50];
    art=[10,20,63,63,];
   obj= {realme:true,redmi:true};
   san={color:"purple"};
   sa=true;
   
  
    url="https://www.google.com";
    angu ()
    {
     //alert("say hii");
     this.santhosh="apple";
  
    }
    sh(){
      this.sa=true;
    }
    hi(){
      this.sa=false;
    }
    readmore(){
      this.more=!this.more;
    }
      //example
   /* if(this.more==true)
    {
      this.more=false;
    }
    else{
      this.more=true;
    
    }
   */
  parent(value:any)
  {
 alert("whats up");
alert(value);
  }

ngOnInit()
{
  console.log('binding ngOnInit called');
}
ngOnDestroy()
{
  console.log('binding ngOnDestroy called');
}
ngOnChanges()
{
  console.log('binding ngOnChanges called')
}


  }
  
  