import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Pages/movies',
    pathMatch: 'full'
  },
  {
    path: 'Pages/tv-shows',
    loadChildren: () => import('./Pages/tv-shows/tv-shows.module').then(m => m.TVShowsPageModule)
  },
  {
    path: 'Pages/movies',
    loadChildren: () => import('./Pages/movies/movies.module').then(m => m.MoviesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
