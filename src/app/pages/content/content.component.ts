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

  contentDetail!:Media;
  certificationMovie!:CertificationMovie;
  id:string | any = '';
  urlCss:string = '';
  rating:number = 0;
  type: string = ''; // Adicione uma propriedade para armazenar o tipo ('movie' ou 'tv')

  formatRating(rating: number): number {
    return Math.round(rating * 1);
  }

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type') ?? '';

    if (this.id && this.type) {
      if (this.type === 'movie') {
        this.getMovieDetails(this.id);
        this.getCertificationMovies(this.id);
      } else if (this.type === 'tv') {
        this.getTvDetails(this.id);
        this.getCertificationMovies(this.id);
      }
    }
  }

  getMovieDetails(id: string): void {
    this.apiService.getMovieIdDetails(parseInt(id, 10)).subscribe({
      next: (resp: Media) => {
        this.contentDetail = resp;
        this.urlCss = `${environment.imageUrl}/w500/${this.contentDetail.backdrop_path}`;
        this.rating = Math.round(this.contentDetail.vote_average * 10);
        console.log("Movie details:", this.contentDetail);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  getTvDetails(id: string): void {
    this.apiService.getTvIdDetails(parseInt(id, 10)).subscribe({
      next: (resp: Media) => {
        this.contentDetail = resp;
        this.urlCss = `${environment.imageUrl}/w500/${this.contentDetail.backdrop_path}`;
        this.rating = Math.round(this.contentDetail.vote_average * 10);
        console.log("TV details:", this.contentDetail);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
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
