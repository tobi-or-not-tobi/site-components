import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CountDownModule, HeroImageModule, ScrollModule, BackdropModule } from 'event-components';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HeroImageModule, CountDownModule, ScrollModule, BackdropModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
