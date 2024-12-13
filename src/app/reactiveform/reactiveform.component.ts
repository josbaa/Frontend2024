import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule],

  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})

export class ReactiveformComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')],
      ],
      lastName: [
        '',
        [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')],
      ],
      personId: [
        '',
        [Validators.required, Validators.pattern('^\\d{6}[-+A]\\d{3}[0-9A-FHJ-NPR-Y]$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^(?=.*[A-Z])(?=.*\\d).+$'),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      termsAccepted: [false, [Validators.requiredTrue]],
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted Successfully!', this.registrationForm.value);
    } else {
      console.log('Form is invalid.');
    }
  }

  passwordsMatch(): boolean {
    return (
      this.registrationForm.get('password')?.value ===
      this.registrationForm.get('confirmPassword')?.value
    );
  }
}
