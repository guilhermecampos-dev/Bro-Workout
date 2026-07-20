Feature: Add workout to user
  This feature allows users to create and assign workouts to a specific user card.

  @regression @ui @workout
  Scenario: Successfully add a workout to a user
    Given a user without workouts exists through the API
    And the user is on the Home Screen
    When the user clicks the "Users" button
    And clicks the "Add Workout" button for the API-created user
    And fills in the "Workout Name" field with "Treino Inferior"
    And selects an exercise "Cadeira Adutora"
    And fills in the number of repetitions "15"
    And fills in the number of sets "4"
    And fills in the weight "20"
    And clicks the "Add Workouts" button
    Then the corresponding workout is created on the user's card
