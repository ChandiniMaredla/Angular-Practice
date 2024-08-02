import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() parent:string | undefined;
  constructor(){}

  childdata='This is child data'
  @Output() custom= new EventEmitter();
  
  send(){
    this.custom.emit(this.childdata)
  }

  senddata(data:any){
this.childdata=data.target.value;
console.log(data.target.value);
console.log(this.childdata)
  }
  
}
