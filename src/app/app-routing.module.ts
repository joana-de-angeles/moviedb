import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TvComponent } from './pages/tv/tv.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/home/movies'
  },
  {
    path:'home/movies',
    component: HomeComponent,
  },
  
  {
    path: 'content/:type/:id',
    component:ContentComponent
  },
  {
    path: 'home/tv',
    component: TvComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
