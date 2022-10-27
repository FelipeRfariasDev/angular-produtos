import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  title = 'Logout';

  constructor(private router:Router) {}

  logout(){
    localStorage.setItem('accessToken','');
    this.router.navigateByUrl('/login');
  }
}