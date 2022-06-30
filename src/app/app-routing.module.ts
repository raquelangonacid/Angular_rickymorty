import { ContentdetailComponent } from './pages/contentdetail/contentdetail.component';
import { AboutComponent } from './pages/about/about.component';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: 'content', component: ContentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'content/:characterID', component: ContentdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }