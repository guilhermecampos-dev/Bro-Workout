import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../e2e/page/home_page";


const homePage = new HomePage();

When('I click the exercises link in the header', () => {
    homePage.accessExercisesPage();
});

Then('the system should display a list of registered exercises', () => {
    cy.url().should('include', '/exercises');
});