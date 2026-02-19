Feature: Exercise Image Display

  Scenario: Validate image display instead of default icon
    Given the user is on the Home Screen
    And an exercise with a registered image exists
    When the user clicks on the "See Exercises" button
    Then the image should be displayed in the exercise record