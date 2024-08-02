import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() child: string | undefined

  constructor(){}

  message='Hi Good Morning'
  @Output() customeve = new EventEmitter();

  passmsg(){
    this.customeve.emit(this.message)
  }
  
  updatemsg(data:any)
  {
this.message = data.target.value
  }
}
