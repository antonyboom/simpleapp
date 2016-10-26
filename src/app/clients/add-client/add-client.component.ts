import 'rxjs/add/operator/map';

import {Component} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

import {Employee} from "./model/add-client.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-client',
  templateUrl: 'add-client.component.html',
  styleUrls: ['add-client.component.css']
})

export class AddClientComponent {

  addUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees';

  departments: Array<any>;
   firstName: '';
   lastName: '';
   id: null;
   salary: null;
   phone: null;
  departmentId: null;

  constructor(private http: Http) {
    http.get('https://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments')
      .map((res: Response) => res.json())
      .subscribe((departments: Array<any>) => this.departments = departments);
  }

  model = new Employee(
    this.id,
    this.firstName,
    this.lastName,
    this.salary,
    this.departmentId,
    this.phone
  );

  submitted = false;

  addEmployee(body, options) {
    return this.http.post(this.addUrl, body, options)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
      .subscribe(data => {console.log(data);});
  }

  onSubmit(model)  {

    // return object model
    // -------------------
    console.log(model);

    // shows submitted form on the bottom of the screen
    // ------------------------------------------------
    this.submitted = true;

    // post method based on angular js docs
    // ------------------------------------
    // === !!! never called !!! ===
    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.addEmployee(body, options)
  };
}
