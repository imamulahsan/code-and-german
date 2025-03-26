import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FlashcardsComponent } from './pages/flashcards/flashcards.component';
import { LevelA1Component } from './pages/level-a1/level-a1.component';
import { LevelA2Component } from './pages/level-a2/level-a2.component';
import { LevelB1Component } from './pages/level-b1/level-b1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flashcards', component: FlashcardsComponent },
  { path: 'level/a1', component: LevelA1Component },
  { path: 'level/a2', component: LevelA2Component },
  { path: 'level/b1', component: LevelB1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
