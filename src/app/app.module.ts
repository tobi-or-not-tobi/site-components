import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CountDownModule, NavbarModule, HeroImageModule, ScrollModule, BackdropModule } from 'event-components';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NavbarModule, HeroImageModule, CountDownModule, ScrollModule, BackdropModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
