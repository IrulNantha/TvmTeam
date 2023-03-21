import { Component } from '@angular/core';

@Component({
  selector: 'app-priyadharshini',
  templateUrl: './priyadharshini.component.html',
  styleUrls: ['./priyadharshini.component.scss']
})
export class PriyadharshiniComponent {

  name="Priya";
  dept="MCA";
  isDisabled=true;
  eventCall()
  {
    console.log("event is called");
}
  
}
