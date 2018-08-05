import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Angular2TokenService} from "angular2-token";
import { debug } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private http: HttpClient, private tokenAuthService:Angular2TokenService) { 
    
  }  

  ngOnInit() {
  }

  onSignInSubmit(){

    this.tokenAuthService.signIn(this.signInUser).subscribe(
        res => {
          if(res.status == 200){
            console.log(res);
          }
        },

        err => {
          console.log('err:', err);
          this.onFormResult.emit({signedIn: false, err});
        }
    )

  }
}
