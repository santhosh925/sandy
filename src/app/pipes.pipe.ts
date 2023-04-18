import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.substr(0,8);
  }

 // transform(shot: string, ...args: string[]): string {
   // return shot.substr(0,20);
  }





