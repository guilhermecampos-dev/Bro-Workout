Feature: Exercise image rendering behavior

    As a system administrator
    I want to view actual images of the exercises in the list
    So that I can identify each movement visually instead of seeing a generic icon

    Scenario: The image must be displayed instead of the default icon for a registered exercise
        Given the user is on the Home Screen
        And there is an exercise with a registered image
        When clicking on the View Exercises button
        Then the image must be displayed in the record