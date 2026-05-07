Feature: Exercise List

  As a system administrator
  I want to view visual media for each registered exercise
  So that I can ensure the correct execution of the movements

  Scenario: Validate display of video buttons
    Given the user is on the Home Screen
    When the user is on the exercise list page
    Then a "Watch video" button must exist for each exercise in the list