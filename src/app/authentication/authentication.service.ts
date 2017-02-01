import { Observable } from 'rxjs/Observable';

import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  // Public variables
  // ---------------------------------------------------------------------------
  authenticated: boolean = true;
  authentication: EventEmitter<boolean>;
  currentUser: any = {admin: true, email: "themohawkeagle@gmail.com", id: 1, name: "Administrador"};
  token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.oR-IHkxvncZCvEJ9HXZ67I5rH2-hROijD4WF73U08Nk';

  // Private & Protected variables
  // ---------------------------------------------------------------------------
  private headers: Headers;
  private url: string = 'http://localhost:3000';

  //
  // Functions
  // ===========================================================================

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.authentication = new EventEmitter();
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  //
  // Getters and Setters
  // ---------------------------------------------------------------------------

  /**
   * Returns Authenticated headers for easy http requests to the API
   * @return {Headers} Http headers, includes the JWT
   */
  get authHeaders(): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }

  get debugInfo(): any {
    return {
      authenticated: this.authenticated,
      currentUser: this.currentUser,
      token: this.token
    };
  }

  //
  // Common functions
  // ---------------------------------------------------------------------------

  /**
   * Signout method
   * @param {boolean} redirect Redirect router to the root page
   */
  logout(redirect: boolean = false) {
    this.token = '';
    this.currentUser = null;
    this.authenticated = false;
    if (redirect) {
      this.router.navigate(['/welcome']);
    }
    this.authentication.emit(this.authenticated);
  }

  /**
   * API authentication method
   * Sends the user email and password to the API in order to receive de JWT
   * @param {any} user User login data
   */
  signin(user) {
    let options = { headers: this.headers };
    this.http.post(`${this.url}/authentication`, JSON.stringify(user), options)
      .map((res) => { return res.json() })
      .subscribe((response) => {
        this.token = response.auth_token;
        this.currentUser = response.user;
        this.authenticated = true;
        // console.log("Response:", response);
        // console.log("Debug:", this.debugInfo);
        this.router.navigate(['/main']);
      },
      (error) => {
        this.logout();
      },
      () => {
        this.authentication.emit(this.authenticated);
      });
  }

}
