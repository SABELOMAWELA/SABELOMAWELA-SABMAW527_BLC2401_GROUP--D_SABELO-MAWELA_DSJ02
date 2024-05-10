Feature: Calculator Functionality
This feature describes the behavior of a simple calculator web application.

Scenario: Successful Calculation
Given a web form with input fields for dividend and divider
When the user enters valid numeric values for dividend and divider
And submits the form
Then the calculator displays the result of the division (integer part)
And the result field should not have any error class

Scenario: Empty Inputs
Given a web form with input fields for dividend and divider
When the user submits the form without entering any values
Then the calculator displays the message "Division not performed. Both values are required in inputs. Try again"

Scenario: Division by Zero
Given a web form with input fields for dividend and divider
When the user enters a valid number for dividend and zero for divider
Then the calculator displays the message "Division not performed. Invalid number provided. Try again"

Scenario: Invalid Input (Non-numeric characters)
Given a web form with input fields for dividend and divider
When the user enters non-numeric characters (letters, symbols) for dividend or divider
Then the calculator displays the message "Something critical went wrong. Please reload the page"
And the result field should have the class "critical-error"