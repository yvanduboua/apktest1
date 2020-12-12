import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menus = [
    {title: 'Home', url:'/menu/home', icon:'home'},
    {title: 'Notes', url:'/menu/notes', icon:'home'},
    {title: 'Mon compte', url:'/menu/moncompte', icon:'home'},
    {title: 'Emploie de temps', url:'/menu/emploiedetemps', icon:'home'},
    {title: 'Contacts', url:'/menu/contact', icon:'home'},
    {title: 'Aides', url:'/menu/aide', icon:'help'},
    {title: 'Deconnection', url:'/login', icon:'log-out'}
  ]

  constructor(private router:Router, private autent:AuthentificationService) { }

  onmenuaction(m){
    if (m.url == '/deconnection') {
      this.autent.logOut();
      this.router.navigateByUrl('/login');
    }
    this.router.navigateByUrl(m.url);
  }

  ngOnInit() {
  }

}
