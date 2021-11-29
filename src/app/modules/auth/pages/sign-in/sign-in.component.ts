import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  img:string = "../../assets/images/img1.jpg";

  authForm =  this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]
  })

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void { }

  public signIn():void {
   console.log(this.authForm.value)
    this.authService.getCredentials({...this.authForm.value }).subscribe(
      resp => {
        console.log(resp)
        this.router.navigate(['/dashboard'])
      }
    );
  }

}
