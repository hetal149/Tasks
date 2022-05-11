import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { HeaderRoutingModule } from './header-routing.module';

import { TicketComponent } from './ticket/ticket.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';


@NgModule({
  declarations: [
  
    SignupComponent,
    SigninComponent,
    TicketComponent,
    
   
  ],
  imports: [
    CommonModule,
  ]
})
export class HeaderModule { }
