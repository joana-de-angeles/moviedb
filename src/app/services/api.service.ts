import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, Movie } from '../types/movies.types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpClient: any;
  constructor(private http: HttpClient) {}

  getTrendingAll(): any {
    return this.http
      .get<ApiResponse>(
        `${environment.url}trending/all/day?language=${environment.language_pt_BR}`
      )
      .pipe(
        map((resp) => {
          console.log(resp)
          return resp;
        })
      );
  }

  getMovieIdDetails(movieId: number): Observable<Movie> {
    return this.http.get<any>(
      `${environment.url}movie/${movieId}?language=${environment.language_pt_BR}`
    ).pipe(
      map((resp1: any) => {
        // Mapeie os dados da resposta para o modelo Movie
        return resp1 as Movie;
      })
    );
  }

  // getDetailsIdMovies(): any {
  //   return this.http.get<any>(
  //     `${environment.url}movie/786892?language=${environment.language_pt_BR}`
  //   ).pipe(map((resp1) =>{
  //     console.log(resp1)
  //     return {
  //       tagline: resp1.tagline
  //     }
  //   }))
  // }
}
