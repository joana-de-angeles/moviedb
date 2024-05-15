import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../types/movies.types';

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
          return resp;
        })
      );
  }
}
