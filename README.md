# PasswordChecker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.
## Initualizing

Make sure you have the Angular CLI installed.
To manage dependencies you can use yarn or npm.
Depending on what you choose, run yarn install or npm install.
Once all dependencies are resolved run ng serve for a dev server.
Then open your browser and navigate tn http://localhost:4200/.

## Functionality

Performs the following functionality: 
Tracks changes in password strength in real time;

Utilizes following calculation in password`s:

  Only letters/digits/symbols - the password is easy;
  Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
  Has letters, symbols and numbers - the password is strong;

The color of the sections will depend on the strength of the password:

  If the field is empty, all sections are gray;
  If the field has less than 8 characters, all sections are red;
  If the password is easy - the first section is red the rest are gray;
  If the password is medium - the first two sections are yellow the last one is gray;
  If the password is strong, all sections are green;






