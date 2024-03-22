import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview-box.component.html',
  styleUrls: ['./overview-box.component.css']
})
export class OverviewBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
