import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FlashcardsComponent } from './pages/flashcards/flashcards.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LevelA1Component } from './pages/level-a1/level-a1.component';
import { LevelA2Component } from './pages/level-a2/level-a2.component';
import { LevelB1Component } from './pages/level-b1/level-b1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlashcardsComponent,
    NavbarComponent,
    LevelA1Component,
    LevelA2Component,
    LevelB1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
