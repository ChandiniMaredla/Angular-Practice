import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
c=0
increment(){
  this.c++
}
decrement(){
  this.c--;
}

name='chandini'
getmess(data:any){
  this.name= data.target.value;
  console.log(data);
  console.log(data.target);
  console.log(data.target.value);
}
cur=8776557666
}
