import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

import { DataService} from './services/data.service';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AuthService} from './services/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { WaitComponent } from './components/wait/wait.component';
import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    ProfileComponent,
    WaitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [{
    provide: 'data',
    useClass: DataService
  },
    {
      provide: 'auth',
      useClass: AuthService
    },
    {
      provide: 'authGuard',
      useClass: AuthGuardService
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
