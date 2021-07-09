import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// -----------------------------------------------------------------------
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { EventDetailComponent } from './Components/event-detail/event-detail.component';
import { EventListComponent } from './Components/event-list/event-list.component';
import { MonthComponent } from './Components/month/month.component';
import { DayComponent } from './Components/day/day.component';
import { LeftSideNavComponent } from './Components/left-side-nav/left-side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ------------------------------------------------------------------------------
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContactCardComponent } from './Components/contact-card/contact-card.component';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventDetailComponent,
    EventListComponent,
    MonthComponent,
    DayComponent,
    LeftSideNavComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
