Feature: Registration

  Scenario Outline: User is able to register new account
    Given User is on the ToolsQA HomePage
    When Navigates to the registration page
    And Enters "<scenario>" information into the form
    And Clicks the Submit button
    Then User will receive message indicating registration was <result>

    Examples:
    |scenario   | result          |
    |'invalid'  | 'unsuccessful'  |
    |'valid'    | 'successful'    |