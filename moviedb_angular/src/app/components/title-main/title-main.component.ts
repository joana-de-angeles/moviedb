import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-title-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-main.component.html',
  styleUrls: ['./title-main.component.css']
})
export class TitleMainComponent implements OnInit {

  @Input() name:string = '';
  @Input() age:string = '';
  @Input() date:string = '';
  @Input() genre:string = '';
  @Input() time:string = '';
  @Input() rate:number = 0;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.age)
  }

}
