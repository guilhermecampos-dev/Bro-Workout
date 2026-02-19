import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ExercisesImagePage from "../../e2e/page/exercisesImage_page";

const exercisesImagePage = new ExercisesImagePage();


Given('the user is on the Home Screen', () => {
  cy.visit('https://bro-workout-frontend.vercel.app/');
});

When('the user clicks on the See Exercises button', () => {
  cy.contains('Ver Exercícios').click();
});

Then('the image should be displayed in the exercise record', () => {
  exercisesImagePage.validateImageButtonExists();
});
