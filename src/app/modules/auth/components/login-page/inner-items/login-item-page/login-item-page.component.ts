import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-item-page',
  templateUrl: './login-item-page.component.html',
  styleUrls: ['./login-item-page.component.scss']
})
export class LoginItemPageComponent implements OnInit {

  loginForm =new FormGroup({
    email:new FormControl('',[Validators.email, Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(6),
    Validators.maxLength(20)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
