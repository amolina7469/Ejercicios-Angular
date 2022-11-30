import { Injectable } from '@angular/core';
import { id, MOVIES } from '../comoponents/db/movies.db';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

 private arrMovies: Movie[] = MOVIES;
 private id: number = id;


  constructor() { }

  getAll(){
    return this.arrMovies;
  }
}
