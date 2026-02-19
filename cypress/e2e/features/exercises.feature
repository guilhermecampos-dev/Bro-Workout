Feature: Exercise List

  Scenario: Validate display of video buttons
    Given the user is on the exercise list page
    Then a "Watch video" button must exist for each exercise in the list