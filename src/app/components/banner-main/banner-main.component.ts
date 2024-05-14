import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-banner-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-main.component.html',
  styleUrls: ['./banner-main.component.css']
})
export class BannerMainComponent {

  @Input() urlBackgroundImage: string = `url('/assets/imgs/Barbie_ofilme.png'`;

  constructor() {}

  setCompanyImg() {
    const url = `url('${this.urlBackgroundImage}')`
    return {
      'background-image': url
    }
  }
}
