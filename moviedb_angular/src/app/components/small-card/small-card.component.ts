import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
