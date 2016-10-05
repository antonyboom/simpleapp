import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { MaterialModule } from '@angular/material';
import {MdListModule} from '@angular/material/list';


import { AppComponent } from './app.component';
import { routing, appRoutingProviders }  from './app.routing';

//==============

import { ClientsComponent } from './clients/clients.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

    MaterialModule.forRoot(),
    MdListModule.forRoot()
  ],

  declarations: [
    AppComponent,
    ClientsComponent,
    DepartmentsComponent,
    AddClientComponent,
    AddDepartmentComponent
  ],

  providers: [appRoutingProviders],

  bootstrap: [AppComponent]
})
export class AppModule { }
