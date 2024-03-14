import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsComponent } from './news/news.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    NewsComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    ButtonsModule.forRoot(),
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot([
      {path: 'HomePage', component: HomePageComponent},
      {path: 'NewsPage', component: NewsComponent},
      {path: 'ContactPage', component: ContactFormComponent},
      {path: '', redirectTo: 'HomePage', pathMatch: 'full'},
      {path: '**', redirectTo: 'HomePage', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
