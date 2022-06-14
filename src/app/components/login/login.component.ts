import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  showErrorCrdentials: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.removeItem('isLogged');

    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public login() {
    const { email, password } = this.form.value;

    if (email === 'efbayonaa@ufpso.edu.co' && password === '123456') {
      localStorage.setItem('isLogged', 'true');
      this.router.navigate(['/dashboard']);

      return;
    }

    this.showErrorCrdentials = true;
  }
}
