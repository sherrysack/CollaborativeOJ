// @ts-ignore
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Navbar = 'COJ';
  username = "aaaaaa";
  constructor(@Inject('auth') private auth) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    if(this.auth.isAuthenticated()){
      if (this.auth.userProfile) {
        // console.log(this.auth.userProfile);
        this.username = this.auth.userProfile.nickname;
      } else {
        this.auth.getProfile((err, profile) => {
          this.username = profile.nickname;
        });
      }
    }
  }

  login(): void {
    this.auth.login();
  }
  logout(): void {
    this.auth.logout();
  }

}
