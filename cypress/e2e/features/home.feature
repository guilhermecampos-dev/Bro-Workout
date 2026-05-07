Feature: View Exercise List

  As a system administrator
  I want to view the list of all registered exercises 
  So that I can view, edit and delete exercises from the library

  Scenario: Successfully viewing the exercise list
    Given the user is on the Home Screen
    When I click the exercises link in the header
    Then the system should display a list of registered exercises