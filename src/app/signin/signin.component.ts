import { Component, OnInit } from '@angular/core';
import { Signindto } from '../interfaces/signindto';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  authentication: Signindto;
  isValid: boolean;

  constructor(private router: Router,
              private authService: AuthService) {
    this.authentication = {username: '', password: ''};
    this.isValid = true;
  }

  ngOnInit(): void {
  }

  signin(): void{
    this.isValid = true;
    this.isValid = this.authService.signin(this.authentication);

    if (this.isValid){
      this.router.navigate(['main']);
    }

  }

}
