import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

movies: Movie[]= [];

constructor(private MoviesService : MoviesService){}

ngOnInit(){
  this.movies = this.MoviesService.getAll();
}

}
