Feature: Exercise image link behavior

    As a system administrator
    I want to access registered exercise images from the list
    So that I can open the visual guide for each movement

    Scenario: The image link must be displayed for a registered exercise
        Given the user is on the Home Screen
        And there is an exercise with a registered image
        When clicking on the View Exercises button
        Then the image link must be displayed in the record
