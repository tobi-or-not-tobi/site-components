import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CountDownModule, NavbarModule } from 'event-components';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NavbarModule, CountDownModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
