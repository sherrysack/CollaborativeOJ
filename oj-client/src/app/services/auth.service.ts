import { Injectable } from '@angular/core';
//import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";


import "rxjs/add/operator/toPromise";
(window as any).global = window;

@Injectable()
export class AuthService {
  userProfile: any;
  requestHeaders: HttpHeaders;
  auth0 = new auth0.WebAuth({
    clientID: 'VoDiopPlp2cplkIKFY2yZv80bUNXlYbn',
    domain: 'lijun-coj.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:3000/callback'
  });

  constructor(public router: Router, private httpclient: HttpClient) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/home']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }
  public resetPassword(): void {
    this.requestHeaders = new HttpHeaders();
    this.requestHeaders = this.requestHeaders.append('Content-Type', 'application/json');
    this.requestHeaders = this.requestHeaders.append('Accept', 'application/json');
    const body = {
      client_id:  'VoDiopPlp2cplkIKFY2yZv80bUNXlYbn',
      email: this.userProfile.name,
      connection: 'Username-Password-Authentication' };

      this.httpclient.post('https://lijun-coj.auth0.com/dbconnections/change_password',
        body, {headers: this.requestHeaders})
                .toPromise()
                .then((res: Response) => {
                  console.log(res.json());
                })
            .catch(this.handleError);
  }

  private handleError(error: Error) {
    console.log('Error occured', error);
    return Promise.reject(error.message || error);
  }

}
