import { MessageBundle } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authent: AuthentificationService, private router: Router) { }

  ngOnInit() {
  }

  onlogin(user){

    let res = this.authent.login(user.username, user.password);

    if (res == true) {
      this.router.navigateByUrl('/menu/home') ;
    }
    else{
      alert("email ou mot de passe eroné")
    }
  }

}
