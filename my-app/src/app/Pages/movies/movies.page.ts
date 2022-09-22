
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MoviesService } from 'src/app/service/movies.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies = [];
  currentPage = 1;
  imageBaseUrl = environment.images ;

  constructor(private moviesService: MoviesService, private loadingCtrl: LoadingController,) { }

  ngOnInit() {
    // this.moviesService.getTopRatedMovies().subscribe(res =>{})
    this.loadMovies();
  }

  async loadMovies() {
    const loading = await this.loadingCtrl.create({
      message: 'loading..',
      spinner: 'bubbles',
    });
    await loading.present();


      this.moviesService.getTopRatedMovies().subscribe((res) => {
        loading.dismiss();
        this.movies = [...this.movies, ...res.results];
      console.log(res);
      
    });
  }
}
