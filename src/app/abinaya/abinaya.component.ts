import { Component } from '@angular/core';

@Component({
  selector: 'app-abinaya',
  templateUrl: './abinaya.component.html',
  styleUrls: ['./abinaya.component.scss']
})
export class AbinayaComponent {
title="Hello"
mybuttonfun(myeventdata: any){
  console.log("I am working")
  console.log(myeventdata)
}
myeventfun(mykeyevent: any)
{
  console.log(mykeyevent)
}
}


