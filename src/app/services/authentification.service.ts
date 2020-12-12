import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  logout() {
    throw new Error('Method not implemented.');
  }
  public authentification:boolean;
  public token: string;     

  constructor() { }

  public login(username:string, password:string){
    if (username == 'totot' && password == '12345') {
      this.authentification = true;
      this.safetoken();
    }
    else{
      this.authentification = false;
    }

    return this.authentification;
  }

  private safetoken(){
    this.token = "abcde";
    localStorage.setItem("mytoken", this.token);
  }

  public chargetoken(){
    this.token = localStorage.getItem("mytoken");
    if (this.token == 'abcde') {
      this.authentification = true;
    }
    else{
      this.authentification = false;
    }

    return this.authentification;
  }

  logOut(){
    localStorage.removeItem('mytoken');
  }
}
