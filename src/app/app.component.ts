import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Compcom';
  val='Chandini'

  msg: any;

  data=['HTML','CSS','JS']
  //data: any//='chhdhuhf'

  arr=[1,2,3,4,5,6,7,8,9,10]

student=[
  {
    "id":1,
    "name":"chandini",
    "sec": "c" 
},
{
  "id":2,
  "name":"cherry",
  "sec": "A"
}

]


num1=10;
num2= 20;
op='//'

wish='Hello! How are you?'

vari: boolean=false;

update(data:any){
  this.vari=data.target.value === 'true';
}

styles={
  border:'3px solid black',
  padding: '10px',
  'margin-top':'10px'
}

address={
  city:'mcity',
  location:'bhogapuram'
}
}
