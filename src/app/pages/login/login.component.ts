import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuild: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      email: [null],
      senha: [null],
    })
  }

  login() {
    console.log('login', this.loginForm.value)
  }
}
