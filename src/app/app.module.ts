import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'welcome', 
              component: WelcomeComponent 
      },
      { path: 'about', 
              component: AboutComponent 
      },     
      { path: '', 
              redirectTo: 'Welcome', 
              pathMatch: 'full'
      },
      {path: '**', 
             redirectTo: 'Welcome', 
             pathMatch: 'full' 
      },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
