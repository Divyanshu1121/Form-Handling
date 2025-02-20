# React Authentication App

This project is a simple authentication system built with React, featuring Login, Signup, and a Welcome page. It allows users to sign up, log in with their credentials, and see a personalized welcome message.

## Table of Contents
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Component Details](#component-details)
  - [App.jsx](#appjsx)
  - [FormController.jsx](#formcontrollerjsx)
  - [Signup.jsx](#signupjsx)
  - [Login.jsx](#loginjsx)
- [Styling](#styling)
- [Future Enhancements](#future-enhancements)

## Project Structure
```
├── src
│   ├── components
│   │   ├── FormController.jsx
│   │   ├── Signup.jsx
│   │   ├── Login.jsx
│   ├── App.jsx
│   ├── index.js
│── public
│── README.md
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Divyanshu1121/Form-Handling
   cd Form-Handling
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm start
   ```

## Usage
- Users can sign up by providing their name, email, password, phone number, date of birth, and an optional file upload.
- After signing up, users can log in using their email and password.
- Upon successful login, a welcome message with the user's name is displayed.

## Component Details

### App.jsx
- The root component of the application.
- Imports and renders `FormController`.

### FormController.jsx
- Manages the authentication flow (switching between login and signup).
- Stores user credentials and displays a welcome page after login.
- Applies inline CSS for styling.

### Signup.jsx
- Renders the signup form with fields:
  - Name
  - Email
  - Password
  - Phone Number
  - Date of Birth
  - File Upload
- Handles form submission and updates parent state.

### Login.jsx
- Renders the login form with:
  - Email
  - Password
- Validates user credentials and logs in the user.

## Styling
- Inline CSS is used for simplicity and includes:
  - Centered form layout
  - Buttons with hover effects
  - Card-like styling for login/signup forms
  - Background color and shadow effects

## Future Enhancements
- Implement backend authentication.
- Add persistent session management.
- Improve UI with external CSS frameworks like Bootstrap or Tailwind CSS.
- Include form validation and error handling.

---
This project demonstrates a basic authentication system using React. Contributions and improvements are welcome!

