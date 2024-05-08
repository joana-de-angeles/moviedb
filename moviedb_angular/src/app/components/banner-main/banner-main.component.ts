import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-banner-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-main.component.html',
  styleUrls: ['./banner-main.component.css']
})
export class BannerMainComponent implements OnInit {

  @Input() url:string = '';

  urlDoComponent: string = 'https://media.themoviedb.org/t/p/w3840_and_h1200_multi_faces_filter(duotone,00192f,00baff)/e3h0knvtz4qPg9dwYdWynALrW9s.jpg'

  constructor() { }

  ngOnInit(): void {
    console.log(this.urlDoComponent)
  }

  bgRandomSwitch(min:number, max:number){
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
