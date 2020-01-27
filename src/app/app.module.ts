import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ApiServiceService} from './api-service.service';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NotyfModule } from 'ng-notyf';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {DragDropModule} from '@angular/cdk/drag-drop';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpAPIComponent } from './http-api/http-api.component';
import { ChildHttpComponent } from './child-http/child-http.component';
import { ErrorsComponent } from './errors/errors.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoComponent } from './info/info.component';
import { NavigationsComponent } from './navigations/navigations.component';




@NgModule({
  declarations: [
    AppComponent,
    HttpAPIComponent,
    ChildHttpComponent,
    ErrorsComponent,
    HomepageComponent,
    InfoComponent,
    NavigationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    NotyfModule,
    MatSortModule,
    HttpClientModule,
    TextMaskModule,
    MatSnackBarModule,
    MatProgressBarModule,
    DragDropModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
