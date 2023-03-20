import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nivedhika',
  templateUrl: './nivedhika.component.html',
  styleUrls: ['./nivedhika.component.scss']
})
export class NivedhikaComponent implements OnInit {

name: string = "Nivedhika";
isVisible :boolean = false;




constructor(){}
  ngOnInit(){}
  

call(){
  console.log("Event Triggered");
}
}
