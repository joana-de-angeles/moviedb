import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() name: string = '';
  @Input() url: string = '';
  @Input() date: string = '';

  imageURL: string = '';

  constructor() { }

  ngOnInit(): void {
    this.imageURL = `${environment.imageUrl}/w500/${this.url}`;

    console.log("🚀 ~ SmallCardComponent ~ ngOnInit ~ this.imageURL:", this.imageURL)
  }

}
