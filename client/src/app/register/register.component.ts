import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  @Output() cancelRegister = new EventEmitter(); // Communication from child to parent component
  model: any = {}

  constructor(private accountService: AccountService, 
    private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => {
        console.log(error),
        this.toaster.error(error.error)
      }
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
