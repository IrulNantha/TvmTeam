import { Component } from '@angular/core';

@Component({
  selector: 'app-lavanyagowri',
  templateUrl: './lavanyagowri.component.html',
  styleUrls: ['./lavanyagowri.component.scss']
})
export class LavanyagowriComponent {
  isUnchanged = false;
  save(){
    alert("Event Binding")
  }
}
