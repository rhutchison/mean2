import { Component, OnInit } from 'angular2/core';
import { RouteConfig, Router } from 'angular2/router';
import {NgForm} from 'angular2/common';

@Component({
  selector: 'users-signup',
  templateUrl: 'users/public/components/signup.component.html'
})
// @RouteConfig([
//   { path: '/signup', as: 'Signup' , component: SignupCmp }
// ])
export class SignupCmp implements OnInit {
  userForm: any;
  credentials = {};
  
  onSubmit(valid) {
    console.log('v', valid);
    console.log(this.userForm);
    console.log(this.credentials);
  }
  
  ngOnInit() {
    console.log('init');
  }
}
