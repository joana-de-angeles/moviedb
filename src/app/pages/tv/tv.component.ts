import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { urlsBackground } from 'src/app/data/background-img';
import { ApiService } from 'src/app/services/api.service';
import { ApiResponse, Media } from 'src/app/types/movies.types';
import { UrlsBackground } from 'src/app/types/urlsBackground';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  tvsData: Media[] = [];
  
  urlsBannerBg:UrlsBackground[] = urlsBackground
  randomUrl: any;


  ngOnInit(): void {
    this.randomUrl = this.urlsBannerBg[this.bgRandomSwitch(0, this.urlsBannerBg.length - 1)];
    this.getTrendingTvs();
  }

  constructor(private router:Router, private apiService: ApiService) { }

  bgRandomSwitch(min:number, max:number){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  contentOverview(type: string, id: number) {
    this.router.navigate(['/content', type, id]);
  }

  getTrendingTvs() {
    this.apiService.getTrendingAllTv().subscribe({
      next: (resp: ApiResponse) => {
        this.tvsData = resp.results;
        console.log("🍿 ~ HomeComponent ~ this.apiService.getTrendingTvs ~ this.TvsData:", this.tvsData)
        },
        error: (err: any) => {
          console.error(err);
        },
      },
    );
  }

}
