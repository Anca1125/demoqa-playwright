# DemoQA Automation Project (Playwright)

This repository contains UI automation tests written in **Playwright with TypeScript**
for the public practice website [DemoQA](https://demoqa.com/).

This project is part of my learning journey as a **Junior QA Automation Engineer**.
It includes both working tests and examples of real challenges encountered while learning
UI automation (timeouts, dynamic elements, iframes, CI failures).

---

## 🎯 Purpose of the Project

The main goal of this project is to:

- practice UI test automation using Playwright
- understand how to structure test files
- learn how locators, assertions, and waits work in real scenarios
- observe how tests behave when running in CI (GitHub Actions)

This is a **learning project**, not a production-ready automation suite.

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub & GitHub Actions

---

## 🛠 Code Structure & Refactoring

The test code evolved during the learning process.
Initial implementations were intentionally kept simple,
then gradually refactored to improve clarity and maintainability.

Refactoring focused on:

- introducing the Page Object Model where it adds value
- keeping assertions inside test files
- avoiding over-engineering while learning new concepts

---

## 🧪 Tested Sections

### Elements

- Text Box
- Check Box
- Radio Button
- Web Tables
- Buttons
- Links
- Broken Links
- Upload & Download
- Dynamic Properties

### Forms

- Practice Form:
  - Text inputs (First Name, Last Name, Email, Phone)
  - Radio buttons (Gender)
  - Checkboxes (Hobbies)
  - Date Picker (Date of Birth)
  - Autocomplete fields (Subjects, State & City)
  - File upload
  - Form submission
  - Modal validation after submit

### Alerts, Frames & Windows

- Browser Windows
- Alerts
- Frames
- Nested Frames
- Modal Dialogs

### Widgets

- Accordian
- Auto Complete
- Date Picker
- Slider
- Progress Bar
- Tabs
- Tool Tips
- Menu
- Select Menu

### Interactions

- Sortable
- Selectable
- Resizable
- Droppable
- Draggable

### Book Store Application

- Login
- Book Store
- Profile
- Basic API interaction

---

## 🧠 Notes & Learning Observations

- Tests are written in a **clear and explicit style** to reflect my learning process.
- Some tests may appear verbose on purpose, to make the logic easier to follow.
- Certain solutions include workarounds (e.g. `force: true`) due to UI limitations
  on the DemoQA website (ads, overlays, dynamic rendering).
- Some tests may fail intermittently in CI because:
  - DemoQA is not a stable test environment
  - elements load differently across browsers
  - iframe content may load with delays

These cases are intentionally kept to better understand:

- flaky tests
- CI failures
- test stability strategies

---

## ▶️ How to Run the Tests

1. Install dependencies:

```bash
npm install
```

2. Run Playwright tests

   npx playwright test

> Make sure Node.js is installed before running the commands above.
