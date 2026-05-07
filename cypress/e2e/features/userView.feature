Feature: User Management

  As a registered user
  I want to access the users list
  So that I can view all registered users' information

  Scenario: Display registered user cards
    Given the user is on the Home Screen
    When they click on the "Users" button
    Then the system should display cards for all registered users