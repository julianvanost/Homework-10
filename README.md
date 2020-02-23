

<a href="https://github.com/julianvanost" style="float:right"><img src="https://avatars3.githubusercontent.com/u/13158626?s=460&v=4" alt="Julian Van Ost" title="Julian Van Ost" width="120" height="120"></a>

# Team Profile Generator
## Node.js and Constructor based team or employee profile generator with unit testing.
``` npm install Handlebars``` , ``` npm install Jest ``` and ``` npm install Inquirer ``` to make sure you have the proper packages installed prior to running.
After this step, use ``` node app.js ``` to run application. Open the "Team.html" file to view your results.

#### [Heroku Repository Link](https://git.heroku.com/powerful-harbor-63187.git) 
#### [Heroku Deployment Name](powerful-harbor-63187) 
#### In Order to run app on Heroku use "More" dropdown --> "Run Console" --> type ```  node app.js ``` 
#### [Live Github Environment](https://julianvanost.github.io/Homework-10/)

__Team Profile Generator__
Dynamically generates your team's profile based on terminal input via inquirer.

__Installation:__
npm install inquirer
npm install handlebars
npm install jest
npm install babel

__Usage:__
Run: node app.js

__Contributors:__
Julian Van Ost

__Tests:__
Constructor: Employee.js Passed
Constructor: Engineer.js Passed
Constructor: Intern.js Passed
Constructor: Manager.js Passed

__Readout:__
 # jest --verbose test/* log: 
 ##### PASS  test/Intern.test.js  
 ##### √ Can set school via constructor (3ms)
 ##### √ getRole() should return "Intern"
 ##### √ Can get school via getSchool()

 ##### PASS  test/Engineer.test.js
 ##### √ Can set GitHUb account via constructor (2ms)
 ##### √ getRole() should return "Engineer"
 ##### √ Can get GitHub username via getGithub()

##### PASS  test/Manager.test.js
##### √ Can set office number via constructor argument (3ms)
##### √ getRole() should return "Manager"
#####  √ Can get office number via getOffice() (1ms)

##### PASS  test/Employee.test.js
##### √ Can instantiate Employee instance (3ms)
##### √ Can set name via constructor arguments (1ms)
##### √ Can set id via constructor argument
##### √ Can set email via constructor argument (1ms)
##### √ Can get name via getName()
##### √ Can get id via getId() (1ms)
##### √ Can get email via getEmail()
##### √ getRole() should return "Employee" (1ms)

#### Test Suites: 4 passed, 4 total
#### Tests:       17 passed, 17 total
#### Snapshots:   0 total
#### Time:        2.588s

__Questions:__
None


# _Repo by julianvanost_
