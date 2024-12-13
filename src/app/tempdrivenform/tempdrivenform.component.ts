import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Person } from '../person'; 

@Component({
  selector: 'app-tempdrivenform',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
   
  ],
  templateUrl: './tempdrivenform.component.html',
  styleUrls: ['./tempdrivenform.component.css'],
})
export class TempDrivenFormComponent {
  person: Person = new Person();

  onSubmit() {
    if (this.person.password === this.person.confirmPassword) {
      console.log('Form submitted successfully', this.person);
     
    } else {
      console.error('Passwords do not match.');
    }
  }
}