import {Component, ViewEncapsulation} from 'angular2/core';
import {
RouteConfig,
ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from './home.component';
import {SignupCmp} from '../../../users/public/components/signup.component';

@Component({
  selector: 'my-app',
  templateUrl: 'core/public/components/app.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Home', component: HomeCmp },
  { path: '/signup', as: 'Signup', component: SignupCmp }
])
export class AppCmp { }