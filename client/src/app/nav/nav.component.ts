import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountSerice: AccountService, private router: Router, 
    private toaster: ToastrService) {}

  ngOnInit(): void {
  }

  login(){
    this.accountSerice.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/members'),
      error: error => this.toaster.error(error.error)
    })
  }

  logout(){
    this.accountSerice.logout();
    this.router.navigateByUrl('/');
  }
}
