import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ApiResponse, CertificationMovie, Media } from 'src/app/types/movies.types';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  movieDetail!:Media;
  certificationMovie!:CertificationMovie;
  id:string | any = '';
  urlCss:string = '';
  rating:number = 0;

  formatRating(rating: number): number {
    return Math.round(rating * 1);
  }

  constructor(private route:ActivatedRoute, private apiService: ApiService) { 
  }

  ngOnInit(): void {

    if (this.route.snapshot.paramMap.has('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getDetailsMovies(this.id);
      this.getCertificationMovies(this.id);
    }
  }

  getDetailsMovies(movieId: string):void {
    this.apiService.getMovieIdDetails(parseInt(movieId, 10)).subscribe({
      next: (resp: Media) => {
        this.movieDetail = resp;
        this.urlCss = `${environment.imageUrl}/w500/${this.movieDetail.backdrop_path}`;
        this.rating = Math.round(this.movieDetail.vote_average * 10);
        console.log("🚀 ~ ContentComponent ~ this.apiService.getMovieDetails ~ this.moviesData:", this.movieDetail)
        console.log("🏅 ~ ContentComponent ~ this.rate:" + this.rating)
        },
        error: (err: any) => {
          console.error(err);
        },
      },
    );
  }

  getCertificationMovies(movieId: string):void {
    this.apiService.getCertificationDetails(parseInt(movieId, 10)).subscribe({
      next: (resp: CertificationMovie) => {
        this.certificationMovie = resp;
        console.log("🚀 ~ certification Data:", this.certificationMovie)
        },
        error: (err: any) => {
          console.error(err);
        },
      },
    );
  }

}
