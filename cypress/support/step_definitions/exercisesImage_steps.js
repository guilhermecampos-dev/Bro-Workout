import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ExercisesImagePage from "../../e2e/page/exercisesImage_page";

const exercisesImagePage = new ExercisesImagePage();

When('the user clicks on the See Exercises button', () => {
  cy.contains('Ver Exercícios').click();
});

Then('the image should be displayed in the exercise record', () => {
  exercisesImagePage.validateImageButtonExists();
});
