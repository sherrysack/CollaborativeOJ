import {Component, Inject, OnInit} from '@angular/core';
import {AuthGuardService} from "../../services/auth-guard.service";
//import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  email: string = ' ';
  username: string = ' ';

  constructor(@Inject('auth') private auth,
              @Inject(AuthGuardService) private authguard) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.username = profile.nickname;
        this.email = profile.name;
      });
    }
  }
  resetPassword() {
    this.auth.resetPassword();
  }
}
