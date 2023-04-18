import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {
username=new FormControl('');

press()
{
  // console.log(this.username);
 console.log( this.username.setValue('brazil'))
}
registrationform=new FormGroup({
  username:new FormControl(''),
  password:new FormControl('')
})
cli(){
  console.log(this.registrationform.patchValue({                       //setvalue or patchvalue use pannalam
    username:'santhosh',
   // password:'12345'
  }));
  
}
}
