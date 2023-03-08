Problem Statement : Advantages of Cypress Web Testing
Assumptions:
1. this should execute automated tests directly in the browser
2. It can be integrated with any CI tool equipped for headless execution with command-line options.
3. It captures screenshots of test execution automatically in case of test failure for effective debugging.
4. Automatically reloads Test Runner once the changes have been made to the test.


Options:

1. Time Travel: 
	It can take snapshots of the application when the tests are running. Then as a test developer, we can hover over each command in the Test Runner panel to see what happened at each step.
2. Debuggability: 
	It enables debugging of the tests directly from the familiar tools like Developer Tools. The readable errors and stack traces make debugging lightning fast.
3. Automatic Waiting: 
	With Cypress, there is no need to put explicit waits or sleeps to your tests. It automatically waits for commands and assertions before proceeding.
4. Spies, Stubs, and Clocks: 
	Similar to unit test cases, you can verify and control the behavior of functions, server responses, or timers at run time using the spies and stubs provided by Cypress.
5. Network Traffic Control:  
	Using Cypress, you can stub network traffic as you like and customize the response of your API calls as per your need.
6. Consistent Results: 
	As Cypress doesn't use Selenium or WebDriver and executes tests directly in the browser, it aids for fast, consistent, and reliable tests that are flake-free.
7. Screenshots and Videos:
	It takes screenshots automatically on failure, or record videos of your entire test suite when running from the CLI.
	
	
Installing:

1. Install Cypress via npm:
	1.1. cd /your/project/path
	1.2. npm install cypress --save-dev

2. Installing Cypress via yarn:
	2.1. cd /your/project/path
	2.2. yarn add cypress --dev
3. Direct download
	3.1. you can always download Cypress directly from our CDN.
	
4.
Create an Angular App
1. npm install -g @angular/cli
2. ng new my-app
3. cd my-app
4. npm install cypress -D
5. npx cypress open

https://docs.cypress.io/guides/component-testing/angular/quickstart



Conclusion:

Cypress is a powerful testing framework that can help improve the quality of web applications by automating tests and making it easier to catch and fix issues before they reach production.

1. It is a next-generation UI automation tool, which executes the test cases directly inside the browser.
2. Additionally, it provides the inbuilt test runner, using which a user can run the test cases directly from Cypress UI.
3. It provides a Dashboard service, which displays the results of all test runs.
4. It provides various unique features like Time Travel, Automatic wait, Stubs, etc. which makes it unique among the various other UI automation tools.
======================================================================================================
	

https://stackoverflow.com/questions/54548642/how-to-write-unit-test-cases-for-app-initializer-using-karma-jasmine-in-angular


https://ngworker.github.io/ngworker/docs/application-testing/


https://stackoverflow.com/questions/63640433/how-to-test-topromise-in-angular-9

