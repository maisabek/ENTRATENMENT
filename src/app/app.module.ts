import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { DrawingModule } from './components/drawing/drawing.module';
import { MoviesModule } from './components/movie/movies.module';
import { NewsModule } from './components/news-data/news.module';
import {MatDialogModule} from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {TranslateModule,TranslateLoader} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import {MatMenuModule} from '@angular/material/menu';
import { GamesModule } from './components/games/games.module';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { MaterialModule } from './shared/material/material.module';
// import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
// import { ArchwizardModule } from 'angular-archwizard';

export function HttpLoaderFactory(http:HttpClient){
return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
// const ngWizardConfig: NgWizardConfig = {
//   theme: THEME.default
// };
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    // DrawingModule,
    MoviesModule,
    NewsModule,
    // NgxChartsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    GamesModule,
    OwlModule,
    // MaterialModule,
    // ArchwizardModule,
    // NgWizardModule.forRoot(ngWizardConfig),
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
    CommonModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
