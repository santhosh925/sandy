import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-httpclient-to-extendservice',
  templateUrl: './httpclient-to-extendservice.component.html',
  styleUrls: ['./httpclient-to-extendservice.component.scss']
})
export class HttpclientToExtendserviceComponent {
  response:any;
constructor(public httpclient:HttpClient){
  this.httpclient.get ('http://localhost:8081/Student/findAll')                     // ('https://catfact.ninja/fact')
  .subscribe((response)=>{
    console.log(response);
    this.response=response;
  })
}






}
