import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-main.component.html',
  styleUrls: ['./title-main.component.css']
})
export class TitleMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
