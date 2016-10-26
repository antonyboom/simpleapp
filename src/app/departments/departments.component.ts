import 'rxjs/add/operator/map';

import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {

  depUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments';

  departments: Object[];
  constructor(private http: Http) {
    http.get(this.depUrl)
      .map((res: Response) => res.json())
      .subscribe((departments: Array<Object>) => this.departments = departments);
  }

  refresh(){
    return this.http.get(this.depUrl)
      .map((res: Response) => res.json())
      .subscribe((departments: Array<Object>) => this.departments = departments);
  }

    removeDepartment(dep){
      return this.http.delete(this.depUrl + "/" + dep.id)
        .map((res: Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
        .subscribe(data => {
          return this.refresh()
        });
    }
}
