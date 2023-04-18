import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  servi='injection';
  numb=15;
  serv()
  {
console.log('calling the function');

  }
}
