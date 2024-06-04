import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Genre } from 'src/app/types/movies.types';


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
  @Input() genres:Genre[] = [];
  @Input() time:number = 0;
  @Input() rate:number = 0;
  
  constructor() { }

  ngOnInit(): void {
    console.log("Genre" + this.genres)


  }

}
