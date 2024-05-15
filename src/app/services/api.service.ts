import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpClient: any;
  constructor(private http: HttpClient) {}

  getTrendingAll(): any {
    return this.http
      .get<any>(
        `${environment.url}trending/all/day?language=${environment.language}`
      )
      .pipe(
        map((resp) => {
          console.log('RESP SERVICE', resp)
          return resp;
        })
      );
  }
}
