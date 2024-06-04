import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ApiResponse, Movie } from 'src/app/types/movies.types';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  movieDetail!:Movie;
  id:string | any = '';
  urlCss:string = '';

  constructor(private route:ActivatedRoute, private apiService: ApiService) { 
  }

  ngOnInit(): void {

    if (this.route.snapshot.paramMap.has('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getDetailsMovies(this.id);
    }

    
    
  }

  getDetailsMovies(movieId: string):void {
    this.apiService.getMovieIdDetails(parseInt(movieId, 10)).subscribe({
      next: (resp: Movie) => {
        this.movieDetail = resp;
        this.urlCss = `${environment.imageUrl}/w500/${this.movieDetail.backdrop_path}`;
        console.log("🚀 ~ ContentComponent ~ this.apiService.getMovieDetails ~ this.moviesData:", this.movieDetail)
        console.log("🚀 runtime:", typeof(this.movieDetail.runtime))
        console.log("🚀 tagline:", typeof(this.movieDetail.tagline))
        console.log("🚀 genre:",this.movieDetail.genres )
        console.log("🚀 img:",this.urlCss)
        console.log('final da url:' + this.urlCss)
        },
        error: (err: any) => {
          console.error(err);
        },
      },
    );
  }

}
