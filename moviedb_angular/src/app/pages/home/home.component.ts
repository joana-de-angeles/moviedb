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


  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.moviesData)
    console.log(this.urlsBannerBg)
  }

  contentOverview(id:string){
    this.router.navigate(['content', id])
  }
}
