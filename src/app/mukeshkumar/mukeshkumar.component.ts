import { Component } from '@angular/core';

@Component({
  selector: 'app-mukeshkumar',
  templateUrl: './mukeshkumar.component.html',
  styleUrls: ['./mukeshkumar.component.scss']
})
export class MukeshkumarComponent {
isDisabled =false;
userName=""
onSave($event:any){
  console.log("Save button is clicked!", $event);
}


onDivClick(){
  console.log("Div is clicked")
}
}
