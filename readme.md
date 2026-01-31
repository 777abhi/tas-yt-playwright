# Test Automation Series - Playwright

This repository contains examples and experiments with [Playwright](https://playwright.dev/) for web automation testing. It serves as a learning sandbox for exploring Playwright features.

## 📂 Current Coverage

The repository currently includes the following implementations in `test.spec.ts`:

*   **Basic Test Verification:**
    *   Navigating to the Playwright homepage.
    *   Verifying page title using assertions (`expect`).
*   **Auto-generated Tests:**
    *   Example of code generated via Playwright Codegen.
    *   Demonstrates interaction with the page by clicking through navigation menus.
*   **Parallel Execution:**
    *   Using `test.describe.parallel` to group and run tests concurrently.
*   **Custom Browser Launch:**
    *   Launching Google Chrome from a specific system path (`executablePath`).
    *   *Note: The current path is configured for macOS (`/Applications/Google Chrome.app/...`). This may need adjustment for Windows or Linux environments.*

## 🚀 Possible Increments

Future improvements and additions to this repository could include:

*   **Data-Driven Testing:**
    *   Extracting test data into external files (e.g., `settings.json`, CSV, or Excel).
    *   Iterating over data sets to run the same test logic with different inputs.
*   **Page Object Model (POM):**
    *   Refactoring tests to use the Page Object Model design pattern.
    *   Separating page structure/locators from test logic for better maintainability and reusability.
*   **Configuration Management:**
    *   Adding a `playwright.config.ts` file to manage global settings.
    *   Configuring browser contexts, base URLs, timeouts, retries, and viewport sizes centrally.
*   **Cross-Browser Testing:**
    *   Configuring the test runner to execute tests on Firefox and WebKit (Safari) in addition to Chromium.
*   **CI/CD Integration:**
    *   Setting up workflows (e.g., GitHub Actions) to automatically run tests on code pushes or pull requests.
*   **Visual Regression Testing:**
    *   Implementing screenshot comparisons to detect unintended visual changes in the UI.
*   **API Testing:**
    *   Adding tests for backend API endpoints using Playwright's APIRequestContext.

## 💡 Topics and Ideas for Exploration

*   **Advanced Selectors:** Deep dive into CSS, XPath, and Playwright's unique layout selectors (e.g., `right-of`, `has-text`).
*   **Authentication State:** Implementing `storageState` to save login cookies/tokens and reuse them across tests to bypass repetitive login screens.
*   **Network Interception:** Mocking API responses or modifying network traffic to test edge cases and error handling.
*   **Reporting:** Integrating with reporters like Allure, Monocart, or customizing the built-in HTML reporter.
*   **Mobile Emulation:** Testing how the application behaves on mobile viewports and verifying responsive design.
*   **Component Testing:** Exploring experimental component testing for React/Vue/Angular components.

## 🛠️ Setup and Usage

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run tests:**
    ```bash
    npx playwright test
    ```

3.  **Run tests with headed browser:**
    ```bash
    npx playwright test --headed
    ```

## 📚 References & Resources

Original TAS (Test Automation Series) notes and video links:

*   **Test Automation Series (TAS) - Introduction:** [YouTube Video](https://www.youtube.com/watch?v=BcSO9cQC06c&list=PL18bn1hY6igVa_WBzDAOayYIu-tNazixG&ab_channel=AbhinavSharma)
*   **First Test:** [YouTube Video](https://www.youtube.com/watch?v=jUybteagtg4&list=PL18bn1hY6igVa_WBzDAOayYIu-tNazixG&index=3&ab_channel=AbhinavSharma)
*   **Auto Generate Code:** [YouTube Video](https://www.youtube.com/watch?v=UgZdJJ7tmyE&list=PL18bn1hY6igVa_WBzDAOayYIu-tNazixG&index=3&ab_channel=AbhinavSharma)
*   **Parallel test execution:** [YouTube Video](https://www.youtube.com/watch?v=qNywpF3YBkw&list=PL18bn1hY6igVa_WBzDAOayYIu-tNazixG&index=4&ab_channel=AbhinavSharma)
*   **Start Chrome browser from installed location:** [YouTube Video](https://www.youtube.com/watch?v=z07VyFbvnS4&list=PL18bn1hY6igVa_WBzDAOayYIu-tNazixG&index=5&ab_channel=AbhinavSharma)
*   **Create Git repo local:** [YouTube Video](https://www.youtube.com/watch?v=Uj3d6DgoDfc&list=PL18bn1hY6igVa_WBzDAOayYIu-tNazixG&index=6&ab_channel=AbhinavSharma)
*   **Push code to remote:** [YouTube Video](https://www.youtube.com/watch?v=QhhjjMs4LbY&list=PL18bn1hY6igVa_WBzDAOayYIu-tNazixG&index=7&ab_channel=AbhinavSharma)
