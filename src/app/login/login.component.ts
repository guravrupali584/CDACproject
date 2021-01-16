import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CanteenService } from '../java_service/canteen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : String ;
  password : String ;
  userdata : any[] = [];
  userdatasub: Subscription;
  constructor( private canteenService : CanteenService , private router : Router ) {

   }

  ngOnInit(): void {

  }

  LoginValidate(form: NgForm){
    console.log("username" + form.value.username);
    console.log("password" + form.value.password);
    this.userdatasub = this.canteenService.getByUserName(form.value.username).subscribe(
      (data) => {
        this.userdata = data as any;
        if(this.userdata === null)
        {
            this.router.navigate(["/signup"]);
        }
        console.log(this.userdata);
      },
      (err) => console.log(err),
      () => {

      }
    )
  }

  compare(username1: String,username2 : String){

  }

}
