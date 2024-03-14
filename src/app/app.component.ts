import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'PasswordChecker';
  password: string = '';
  strength: string = '';


  ngOnInit(): void {
    this.password = ''; // Clear the input field when loading a component
    this.getPasswordStrength(); // Call a method to initially estimate password strength
  }

  onPasswordChange(): void {
    this.getPasswordStrength(); // Call the method when the content of the input field changes
  }

  getPasswordStrength(): any {
    const length = this.password.length;

    if (length === 0) {
      return this.strength = "noValue"/// Three Gray
    } else if (length < 8) {
     return this.strength = "underValue" ///Three Red
    } else {
      const hasDigits = /\d/.test(this.password);
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(this.password);

      if (hasDigits && hasLetters && hasSymbols) {
        return this.strength = "strong" /// Three Section Green
      } else if ((hasDigits && hasLetters) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        return this.strength = "medium";/// Two Sections Yellow Third is gray
      } else if (hasDigits || hasLetters || hasSymbols) {
        return this.strength = "weak";/// First is Red - Rest are Gray
      }
    }
  }
}