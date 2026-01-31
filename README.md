# Student ID: IT23228412

# ITPM (IT3040) Assignment 1 – Singlish to Sinhala Automation Testing

## Project Overview

This project automates functional and UI test scenarios for the SwiftTranslator
(Singlish to Sinhala) web application using Playwright.

## Project Structure

```
IT23288412/
├─ singlish-playwright/
│  ├─ package.json
│  ├─ playwright.config.js
│  └─ tests/
│     ├── IT23228412_negative_functional.spec.ts
│     ├─ IT23228412_negative_ui.spec.ts
|     ├── IT23228412_positive_functional.spec.ts
│     └─ IT23228412_positive_ui.spec.ts
├─ IT23288412_GitHub_Link.txt
├─ IT23288412_TestCases.xlsx
├─ package-lock.json
├─ package.json
└─ README.md
```

## Tools & Technologies

- Node.js (v18+ recommended)
- Playwright (end-to-end testing framework)
- TypeScript (for test development)
- JavaScript (for scripting and tests)
- XLSX (Excel file generation for test documentation)
- @types/node (TypeScript type definitions for Node.js)
- HTML Reporter (Playwright built-in)
- Modern browsers (Chromium, via Playwright)

## VS Code Run Instructions

1. Open the repository folder in VS Code.
2. Open a terminal and change directory:
   - `cd singlish-playwright`
3. Install dependencies:
   - `npm install`
4. Run all tests:
   - `npx playwright test`
5. View the test report:
   - `npx playwright show-report`

## Project Navigation Guide

### Directory Structure
- **singlish-playwright/** - Main testing directory containing all test configurations and test files
  - **tests/** - Contains all Playwright test specification files (.spec.ts)
  - **playwright.config.js** - Playwright configuration for test execution
  - **package.json** - Project dependencies and scripts

### Test Files Location
All test files are located in: `singlish-playwright/tests/`

### Running Tests

**Run all tests:**
```bash
npx playwright test
```

**Run specific test file:**
```bash
npx playwright test IT23228412_positive_functional.spec.ts
```

**Run tests in debug mode:**
```bash
npx playwright test --debug
```

**Run tests in headed mode (browser visible):**
```bash
npx playwright test --headed
```

**Generate and view HTML report:**
```bash
npx playwright show-report
```

## Test Files

- [singlish-playwright/tests/IT23228412_negative_functional.spec.ts](singlish-playwright/tests/IT23228412_negative_functional.spec.ts) - Invalid input handling and error scenarios
- [singlish-playwright/tests/IT23228412_negative_ui.spec.ts](singlish-playwright/tests/IT23228412_negative_ui.spec.ts) - UI performance and responsiveness tests
- [singlish-playwright/tests/IT23228412_positive_functional.spec.ts](singlish-playwright/tests/IT23228412_positive_functional.spec.ts) - Valid input translation and functionality tests
- [singlish-playwright/tests/IT23228412_positive_ui.spec.ts](singlish-playwright/tests/IT23228412_positive_ui.spec.ts) - Real-time UI conversion and interaction tests

## Test Cases Overview

### Negative Functional Tests (10 cases)
Tests for error handling and invalid inputs:
- Empty input validation
- Random symbols handling
- Wrong spelling detection
- Numbers-only input
- English-only input
- Slang input detection
- Mixed symbols handling
- Whitespace input validation
- Gibberish input detection
- Special characters handling

### Positive Functional Tests (24 cases)
Tests for valid translations and correct functionality:
- Short requests
- Detailed instructions
- Various sentence structures
- Imperative commands
- Advice sentences
- Simple answers
- Simple negatives
- And 17 more comprehensive test scenarios

### UI Tests (6 cases)
Tests for user interface responsiveness and performance:
- **Positive UI (3 cases)** - Real-time conversion, responsive design, smooth interactions
- **Negative UI (3 cases)** - Long UI lag detection, performance under stress, timeout handling

## Test Results

After running tests, results are stored in:
- **test-results/** - Contains detailed test execution results
- **playwright-report/** - Contains HTML report with screenshots and logs

View the report using: `npx playwright show-report`
