import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-main.component.html',
  styleUrls: ['./banner-main.component.css']
})
export class BannerMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
