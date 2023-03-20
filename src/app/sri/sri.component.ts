import { Component } from '@angular/core';

@Component({
  selector: 'app-sri',
  templateUrl: './sri.component.html',
  styleUrls: ['./sri.component.scss']
})
export class SriComponent {
  temp:any
  value:any
  call(val1:any,val2:any){
    this.temp = this.value
    alert("name :"+val1 +" password : "+val2)
}

}
