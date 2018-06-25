import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
    CountDownModule,
    NavbarModule,
    HeroImageModule,
    ScrollModule,
    BackdropModule,
    ImageGalleryModule,
    ImageModalModule
} from 'event-components';
import { NewsComponent } from './news/news.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '**',
        component: NewsComponent
    }
];
@NgModule({
    declarations: [AppComponent, NewsComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        NavbarModule,
        HeroImageModule,
        CountDownModule,
        ScrollModule,
        BackdropModule,
        ImageGalleryModule,
        ImageModalModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
