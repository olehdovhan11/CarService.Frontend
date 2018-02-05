import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatDivider} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { CarListComponent } from './components/car-list/car-list.component';

import { CarUrlBuilder } from './services/car-url-builder';
import { CarService } from './services/car.service';
import { CarDetailGalleryComponent } from './components/car-detail-gallery/car-detail-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarDetailComponent,
    CarListComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    CarDetailGalleryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [
    CarUrlBuilder,
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
