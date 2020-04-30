import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JawabanComponent } from './jawaban/jawaban.component';
import { KalkulatorComponent } from './kalkulator/kalkulator.component';

import{Routes,RouterModule} from '@angular/router';

const ROUTES: Routes =[
  {path: '',component:KalkulatorComponent},
  {path: 'jawaban',component:JawabanComponent},
]



@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)  ],
  declarations: [ AppComponent, HelloComponent, JawabanComponent, KalkulatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
