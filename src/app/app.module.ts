import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CountDownModule, NavbarModule } from 'event-components';
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
    imports: [BrowserModule, RouterModule.forRoot(routes), NavbarModule, CountDownModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
