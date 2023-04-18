import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent
{
    @Input()
    name='';
    @Output()
    hi=new EventEmitter();         //

    
    per(){
        alert("hello");
        this.hi.emit("nothing");

    }

ngAfterViewInit()
{
    console.log('welcome ngAfterViewInit called ');
}
ngAfterViewChecked()
{

    console.log('welcome ngAfterViewChecked called ');
}
ngAfterContentIntit()
{
    console.log('welcome ngAfterContentIntit called');
}
ngAfterContentChecked()
{
    console.log('welcome ngAfterContentChecked called');
}







}


