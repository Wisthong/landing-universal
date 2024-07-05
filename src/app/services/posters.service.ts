import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  Poster,
  ResponseArrayPoster,
  ResponsePoster,
} from '../interface/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class PostersService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAlll(): Observable<Poster[]> {
    return this.http.get<ResponseArrayPoster>(this.apiUrl + '/posters').pipe(
      map(({ data }) => {
        return data;
      })
    );
  }

  getOne(id: string): Observable<Poster> {
    return this.http.get<ResponsePoster>(this.apiUrl + '/posters/' + id).pipe(
      map(({ data }) => {
        return data;
      })
    );
  }
}
