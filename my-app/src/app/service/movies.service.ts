
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


export interface apiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }


  getTopRatedMovies(): Observable<apiResult> {
    return this.http.get<apiResult>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}`);
  }

  getMovieDetails(id: string){
    return this.http.get(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
    )
  }

}