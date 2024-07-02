# Qubika Sports Club Management Automation

This repository contains end-to-end tests using Playwright to automate workflows on the Qubika Sports Club management website. The tests cover both API and UI automation in a single test, ensuring seamless integration and validation across both aspects of the application.

## Project Structure

- **`/e2e/tests`**: Contains end-to-end tests written using Playwright.
- **`/utils`**: Utility functions and helpers.
- **`/fixtures`**: Custom fixtures for test setup.
- **`/frameworkConfig`**: Configuration files for environment setup.

## Workflow Automation

### Workflow Steps

1. **Create a New User through API**:

   - Utilize API endpoints to register a new user on the Qubika Sports Club Management System. `faker-js` is used to generate random email addresses and passwords for each new user registration, ensuring variability and realism in test data.
   - Store user information, such as email and password, for subsequent login.

2. **Login and Validate**:

   - Navigate to the login page.
   - Validate the correct display and elements on the login page.

3. **Login with Created User**:

   - Perform login using the previously created user credentials.
   - Ensure successful login and transition to the dashboard.

4. **Category Management**:
   - Navigate to the category management page.
   - Create new categories and subcategories using `faker-js` to generate random category names. This approach ensures that each test run uses unique and realistic data, enhancing test coverage and robustness.
   - Validate successful creation and visibility of categories and subcategories within the application.

**Libraries used:**
- [Playwright](https://playwright.dev/) - Browser and API Automation
- [Typescript](https://www.typescriptlang.org/) - Programming Language
- [Dotenv](https://www.npmjs.com/package/dotenv) - Environment Variables
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code Formatting
- [Fakerjs](https://fakerjs.dev/) - Data Generation

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en) and npm installed on your machine.

### Project Setup

**Installing Dependencies:**

```bash
npm install
```

**Installing Playwright**

```bash
npx playwright install
```

**Running the tests:**

```bash
npm run test - Run all tests
npm run test:chrome - Run UI tests in Chromium
```

**Formatting:**

```bash
npm run format:fix
```

**Linting:**

```bash
npm run lint:fix
```
## Husky Integration

Husky is integrated into this project to enforce linting and code formatting standards on every commit. It ensures that the codebase remains consistent and adheres to predefined coding conventions.

### Linting and Formatting

Husky is configured to run `npm run lint && npm run format` on every commit. This ensures that all code adheres to linting rules and is formatted correctly using Prettier.

For more details on Husky and its configuration, visit [Husky Documentation](https://husky.dev/).

## Future Improvements

### 1. Enhanced Error Handling
Implement robust error handling mechanisms to gracefully manage and recover from unexpected scenarios during test execution.

### 2. Performance Optimization
Optimize test suite execution by further parallelizing tests and leveraging Playwright's capabilities for faster test runs.

### 3. Data-Driven Testing
Introduce data-driven testing approaches to validate application behavior across various input scenarios.

### 4. Cross-Browser Testing
Expand testing to cover multiple browsers (e.g., Chrome, Firefox, Safari) to ensure consistent functionality and user experience across different browser environments.

### 5. Continuous Integration/Continuous Deployment (CI/CD) Pipeline
Integrate the test suite with a CI/CD pipeline to automate the execution of tests on each code change and facilitate continuous delivery of high-quality software.

### 6. Integration with Test Management Tools
Integrate with test management tools to centralize test case management, execution, and reporting.

### 7. Extend Test Coverage
Expand test coverage to include edge cases, negative scenarios, and additional user journeys to enhance overall application reliability and user experience.