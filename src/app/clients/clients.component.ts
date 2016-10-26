import 'rxjs/add/operator/map';

import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent {

  empUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees';

  clients: Object[];
  constructor(private http: Http) {
    http.get(this.empUrl)
      .map((res: Response) => res.json())
      .subscribe((clients: Array<Object>) => this.clients = clients);
  }

  refresh(){
    return this.http.get(this.empUrl)
      .map((res: Response) => res.json())
      .subscribe((clients: Array<Object>) => this.clients = clients);
  }

  removeEmployee(client){
    return this.http.delete(this.empUrl + "/" + client.id)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
      .subscribe(data => {
        return this.refresh()
      });
  }

}
