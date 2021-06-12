# JS Manager Employee problem
The employee directory allows employees to see the names and team members of every supervisor.

1. Cypress tests at a component level.
2. Styled UI components split in atoms as the minimal UI unit, molecules as a bond of atoms, and pages as the higher level of abstraction built mostly from molecules.
3. Service component.
4. A PullState store to observe for changes in the search input.
5. Webpack5 configurations for NextJS.

# Two required user stories
1. As a user, I am able to search for employees:
- User is able to input the employee
name in the input field
- User is able to click search button

2. As a user, I want to know for a given employee who works directly for that given employee (direct re- ports) and who indirectly works for that given employee (all subordi-nates of structured tree)

- The overview page should include information about direct and non-direct subordinates (all non-direct subordinates)
- The overview shouldn’t include duplicate employee names

# How to run this program
npm run install

### Run Next web server
npm run dev

### Run test components on headless mode.
The tests are located at cypress/component folder.

npm run dev ***(to build the code)***

npm run test-components-headless ***(will run the Webpack dev server to build the tests and serve them)***

### Run ESLint to check code style on page/ folder
npm run lint