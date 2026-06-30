Feature: Active Workout
  This feature validates that a workout created through the API
  is displayed on the Active Workout page.

  @smoke @regression @ui @api-setup @active-workout
  Scenario: Display an API-created workout for a selected user
    Given a user with a workout exists through the API
    When the user opens the Active Workout page
    And selects the API-created user
    And expands the API-created workout
    Then the workout details should be displayed correctly
