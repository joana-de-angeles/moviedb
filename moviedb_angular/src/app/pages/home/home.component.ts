import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movies } from 'src/app/data/movies';
import { Movies } from 'src/app/types/movies.types';
import { UrlsBackground } from 'src/app/types/urlsBackground';
import { urlsBackground } from 'src/app/data/background-img';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesData:Movies[] = movies
  urlsBannerBg:UrlsBackground[] = urlsBackground
  randomUrl: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.randomUrl = this.urlsBannerBg[this.bgRandomSwitch(0, this.urlsBannerBg.length - 1)];
  }

  bgRandomSwitch(min:number, max:number){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  contentOverview(id:string){
    this.router.navigate(['content', id])
  }
}
