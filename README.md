# Bro Workout QA Automation Project

This repository contains automated end-to-end and API tests developed for the Bro Workout application.

The goal of this project is to validate core user flows, support functional stability, and demonstrate QA automation practices using Cypress, Cucumber and JavaScript.

## Application Under Test

https://bro-workout-frontend.vercel.app/

## Project Objective

This project was created to:

- Validate critical user journeys
- Apply Behavior-Driven Development (BDD)
- Practice scalable test architecture
- Demonstrate real-world QA automation skills

## Tech Stack

- Cypress for UI and API testing
- Cucumber for BDD scenarios
- JavaScript
- Page Object Model (POM)

## Test Coverage

The automated scenarios currently cover:

### User Management

- Navigate to the users page
- Validate registered user cards page access

### Exercise Management

- Add a new exercise
- Validate required fields
- Display registered exercises
- Validate video button rendering
- Validate image rendering when an image URL exists

### Active Workout

- Create a user through the API
- Assign a workout through the API
- Select the API-created user on the Active Workout page
- Validate workout exercise, repetitions, executions and weight

### API Testing

- GET /users: validate users list and response structure

## Project Structure

```text
cypress/
 ├── e2e/
 │    ├── API/                # API specs
 │    ├── elements/           # Element locators
 │    ├── features/           # Gherkin feature files
 │    └── page/               # Page Objects
 ├── support/
 │    ├── step_definitions/   # Cucumber step definitions
 │    ├── commands.js
 │    └── e2e.js
cypress.config.js
package.json
README.md
```

## How to Run the Tests

### 1. Clone the repository

```bash
git clone https://github.com/guilhermecampos-dev/Bro-Workout.git
cd Bro-Workout
```

### 2. Install dependencies

```bash
npm install
```

### 3. Open Cypress UI

```bash
npm run cy:open
```

### 4. Run all tests in headless mode

```bash
npm test
```

### 5. Run only BDD feature files

```bash
npm run cy:run:bdd
```

## QA Strategy

This project follows:

- BDD structure with Given, When and Then
- Separation of concerns using Page Objects
- Element locator files for reusable selectors
- API setup with cy.request()
- Clear and readable scenarios

The objective is not only to test, but to build maintainable automation.

## Author

Guilherme Campos

QA Automation Engineer

https://github.com/guilhermecampos-dev

## License

MIT 2026 Guilherme Campos
