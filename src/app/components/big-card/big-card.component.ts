import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() url:string = '';

  bigImageURL:string = '';

  constructor() { }

  ngOnInit(): void {

    this.bigImageURL = `${environment.imageUrl}/w500/${this.url}`;

    console.log("🚀 ~ SmallCardComponent ~ ngOnInit ~ this.imageURL:", this.bigImageURL)
  }

}
