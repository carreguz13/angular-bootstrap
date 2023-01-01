import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
public titulo2: string;

constructor(){
  this.titulo2 = "mi primer proyecto"
}
}
