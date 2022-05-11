import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  

  public totalItem : number = 0;
  public searchTerm !: string;

  constructor(public AuthService:AuthService,public router: Router) {this.AuthService.user
  if(this.AuthService.loggedIn()){
    this.AuthService.isloggedin=true;
    this.router.navigate(['/home'])
  }}

  ngOnInit(): void {

  }

  
  onLogoutClick() {
   
    this.AuthService.logout();
    this.AuthService.isloggedin = false;
    this.router.navigate(['/home']);
   
  }

}
