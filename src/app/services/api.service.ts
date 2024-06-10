import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, CertificationMovie, Movie, TvShow } from '../types/movies.types';

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

  // getMovieAndTvDetails(movieId: number): Observable<{ movie: Movie, tvShow: TvShow }> {
  //   const movieUrl = `${environment.url}movie/${movieId}?language=${environment.language_pt_BR}`;
  //   const tvUrl = `${environment.url}tv/${movieId}?language=${environment.language_pt_BR}`;

  //   const movieRequest = this.http.get<Movie>(movieUrl);
  //   const tvRequest = this.http.get<TvShow>(tvUrl);

  //   return forkJoin([movieRequest, tvRequest]).pipe(
  //     map(([movieResp, tvResp]) => {
  //       return { movie: movieResp, tvShow: tvResp };
  //     })
  //   );
  // }

  getMovieIdDetails(movieId: number): Observable<Movie> {
    return this.http.get<any>(
      `${environment.url}movie/${movieId}?language=${environment.language_pt_BR}`
    ).pipe(
      map((resp1: any) => {
        return resp1 as Movie;
      })
    );
  }

  getCertificationDetails(movieId:number): Observable<CertificationMovie>{
    const url = `${environment.url}movie/${movieId}/release_dates?language=${environment.language_pt_BR}`;
    
    return this.http.get<any>(url).pipe(
      map((resp: any) => {
        const brCertification = resp.results.find((item: any) => item.iso_3166_1 === "BR");
        let certification = brCertification?.release_dates[0]?.certification || "";
        if (certification === "") {
          certification = "Livre"; 
        }
        return {
          iso_3166_1: brCertification?.iso_3166_1 || "",
          certification: certification
        };
      })
    );
  }
}
