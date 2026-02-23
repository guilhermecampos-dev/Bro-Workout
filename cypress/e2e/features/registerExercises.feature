Feature: Create Exercise

  Scenario: Register new exercise successfully
    Given the user is on the Home Screen
    When the user navigates to the Exercises page
    And clicks on the Add Exercise button
    And fills in the Exercise Name field with "Supino Teste"
    And fills in the Video URL field with "https://youtube.com/teste"
    And fills in the Image URL field with "https://image.com/teste.jpg"
    And clicks on the Create button
    Then the new exercise "Supino Teste" should be displayed in the exercises list


  Scenario: Exercise must not be created without required fields
    Given the user is on the Home Screen
    When the user navigates to the Exercises page
    And clicks on the Add Exercise button
    And fills in the Video URL field with "https://youtube.com/teste"
    And fills in the Image URL field with "https://image.com/teste.jpg"
    And clicks on the Create button
    Then an error message should be displayed
