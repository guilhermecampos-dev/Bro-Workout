import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../e2e/page/home_page";

const homePage = new HomePage();


Given('the user is on the home screen', () => {
    homePage.accessBroworkoutPage();
});

When('they click on the Exercises page', () => {
    homePage.accessExercisesPage();
});

Then('the system should display a list of registered exercises', () => {
    cy.url().should('include', '/exercises');
});