import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DepartmentsComponent} from "./departments/departments.component";
import {AddDepartmentComponent} from "./departments/add-department/add-department.component";
import {ClientsComponent} from "./clients/clients.component";
import {AddClientComponent} from "./clients/add-client/add-client.component";

const appRoutes: Routes = [
  { path: 'departments',
    component: DepartmentsComponent,
    data: {
      title: 'Department List'
    }
  },
  {
    path: 'clients',
    component: ClientsComponent,
    data: {
      title: 'Clients List'
    }
  },
  {
    path: 'new-employee',
    component: AddClientComponent,
    data: {
      title: 'New Employee'
    }
  },
  {
    path: 'new-department',
    component: AddDepartmentComponent,
    data: {
      title: 'New Department'
    }
  }
];

export const appRoutingProviders: any[] = [];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule],
//   providers: []
// })
// export class SimpleappRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


