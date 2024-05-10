import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule,NbMenuModule, NbButtonModule,NbContextMenuModule,NbActionsModule, NbToastrModule,  } from '@nebular/theme';

import { HomeComponent } from './home/home.component';
import { NbSidebarService } from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToastserviceComponent } from './toastservice/toastservice.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ToastserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbContextMenuModule,
    NbToastrModule.forRoot(),

  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
