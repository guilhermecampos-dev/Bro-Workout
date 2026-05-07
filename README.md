# 🧪 Bro Workout – QA Automation Project 

This repository contains automated end-to-end tests developed for the Bro Workout application.

The goal of this project is to validate core user flows, ensure system reliability, and demonstrate best practices in test automation using modern QA tools.

## 👉 Application under test:
https://bro-workout-frontend.vercel.app/

# 🎯 Project Objective

### This project was created to:

- Validate critical user journeys

- Ensure functional stability

- Apply Behavior-Driven Development (BDD)

- Practice scalable test architecture

- Demonstrate real-world QA automation skills

# 🧰 Tech Stack

## Test Automation Framework

- Cypress (UI + API Testing)

- Cucumber (BDD)

- JavaScript

## Architecture Pattern

- Page Object Model (POM)

## CI/CD

- GitHub Actions

# 📋 Test Coverage

## The automated scenarios cover:

### 🔐 Authentication

- Valid login

- Invalid login

- Logout

### 🏋️ Exercise Management

- Add new exercise

- Validate required fields

- Display registered exercises

- Validate default icon when no image is provided

- Validate image rendering when image URL exists

## 🔌 API Testing

The project also includes automated API tests using Cypress.

### Covered endpoints:

- GET /users → validate users list and response structure
- POST /users → create new user and validate response data

### Validations performed:

- Status code validation (200, 201)
- Response structure validation

### 🏗️ Project Structure
```cypress/
 ├── e2e/
 │    ├── api/                # API tests
 │    │    └── users.cy.js
 │    ├── features/           # Gherkin .feature files
 │    ├── step_definitions/   # BDD steps
 │    ├── pages/              # Page Objects
 │
 ├── support/
 │    └── commands.js
 │
cypress.config.js
package.json
README.md
```

# 🚀 How to Run the Tests

## 1️⃣ Clone the repository
git clone https://github.com/guilhermecampos-dev/Bro-Workout.git
cd Bro-Workout

## 2️⃣ Install dependencies
npm install

## 3️⃣ Open Cypress UI
npx cypress open

## 4️⃣ Run in headless mode
npx cypress run

# 🧠 QA Strategy

## This project follows:

- BDD structure (Given / When / Then)

- Separation of concerns using Page Objects

- Reusable commands

- Clear and readable scenarios

- Stable selectors strategy

- API testing with cy.request()

The objective is not only to test, but to build maintainable automation.

# 👨‍💻 Author

## Guilherme Campos
### QA Automation Engineer 

## GitHub:
https://github.com/guilhermecampos-dev

## 📜 License
MIT © 2026 Guilherme Campos
