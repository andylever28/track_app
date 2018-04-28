import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient, private authToken: Angular2TokenService) {

  }  
 	
	ngOnInit(): void {

	}
}
