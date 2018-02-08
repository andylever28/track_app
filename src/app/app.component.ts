import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }  

  title = 'NY Sports Teams';
	teams;
 	
	ngOnInit(): void {
		this.http.get('http://localhost:3000/teams.json').subscribe(
			data => {
				console.log(data);
				this.teams = data;
			})
	}
}
