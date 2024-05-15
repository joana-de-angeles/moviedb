import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse, Movie, Movies } from 'src/app/types/movies.types';
import { UrlsBackground } from 'src/app/types/urlsBackground';
import { urlsBackground } from 'src/app/data/background-img';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesData: Movie[] = [];
  urlsBannerBg:UrlsBackground[] = urlsBackground
  randomUrl: any;

  constructor(private router:Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.randomUrl = this.urlsBannerBg[this.bgRandomSwitch(0, this.urlsBannerBg.length - 1)];
    this.getTrendingMovies();
  }

  bgRandomSwitch(min:number, max:number){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  contentOverview(id: number){
    this.router.navigate(['content', id])
  }

  getTrendingMovies() {
    this.apiService.getTrendingAll().subscribe({
      next: (resp: ApiResponse) => {
        this.moviesData = resp.results;
        console.log("🚀 ~ HomeComponent ~ this.apiService.getTrendingAll ~ this.moviesData:", this.moviesData)
        },
        error: (err: any) => {
          console.error(err);
        },
      },
    );
  }
}
