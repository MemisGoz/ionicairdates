import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Movies', url: '/Pages/movies', icon: 'film' },
    { title: 'TV Shows', url: '/Pages/tv-shows', icon: 'videocam' },
  ];
  public labels = ['Fantasy', 'Sci-fi', 'Horror', 'Comedy', 'Adventure', 'Romantic'];
  constructor() { }
}
