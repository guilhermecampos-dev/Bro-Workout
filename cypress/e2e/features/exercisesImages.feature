Feature: Exercise image rendering behavior

Scenario: The image must be displayed instead of the default icon for a registered exercise

Given the user is on the Home Screen
And there is an exercise with a registered image
When clicking on the View Exercises button
Then the image must be displayed in the record