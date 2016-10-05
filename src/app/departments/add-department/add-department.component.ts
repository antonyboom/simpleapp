import 'rxjs/add/operator/map';

import {Component} from '@angular/core';
import {Response, RequestOptions, Headers, Http} from '@angular/http';

import {Department} from "./model/add-department.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-department',
  templateUrl: 'add-department.component.html',
  styleUrls: ['add-department.component.css']
})

export class AddDepartmentComponent {

  addUrl = 'https://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments';

  public id: null;
  public name: '';
  public description: '';

  model = new Department(
    this.id,
    this.name,
    this.description,
  );

  submitted = false;

  constructor(private http: Http) {}

  addDepartment(body, options) {
    return this.http.post(this.addUrl, body, options)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
      .subscribe(data => {console.log(data);});
  }

  onSubmit(model) {
    // shows submitted form on the bottom of the screen
    // ------------------------------------------------
    this.submitted = true;
    // post method based on angular js docs
    // ------------------------------------
    // === !!! never called !!! ===
    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.addDepartment(body, options)
  }
}
