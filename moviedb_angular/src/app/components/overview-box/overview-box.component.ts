import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Creators } from 'src/app/types/movies.types';

@Component({
  selector: 'app-overview-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview-box.component.html',
  styleUrls: ['./overview-box.component.css']
})
export class OverviewBoxComponent implements OnInit {

  @Input() tagline:string = '';
  @Input() sinopse:string = '';
  @Input() creatorsOverview:Creators[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
