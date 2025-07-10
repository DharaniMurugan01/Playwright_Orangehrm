Feature: OrangeHRM Login and Forgot Password Functionality

  @Login
  Scenario Outline: Login functionality with various credentials
    Given the user navigates to OrangeHRM login page
    When the user enters username "<username>" and password "<password>"
    And clicks on the Login button
    Then the user should see "<loginResult>"

    Examples:
      | username     | password     | loginResult    |
      | Admin        | admin123     | valid login    |
      | invalidUser  | invalidPass  | invalid login  |
      |              | invalidPass  | empty login    |

  @ForgotPassword
  Scenario: Forgot Password functionality
    Given the user navigates to OrangeHRM login page
    When the user clicks on the Forgot Password link
    Then the Forgot Password page should be displayed
