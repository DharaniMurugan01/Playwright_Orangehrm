Feature: OrangeHRM_PIM 
Scenario: Add a new employee
  Given the user navigates to OrangeHRM login page
  When the user enters username "Admin" and password "admin123"
  And clicks on the Login button
  When the user click the PIM menu
  And the user Add the employee
  Then the employee should be added successfully
  