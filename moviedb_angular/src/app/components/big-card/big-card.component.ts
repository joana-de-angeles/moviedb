import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
