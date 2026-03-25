import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import UserViewPage from "../../e2e/page/userView_page";

const userViewPage = new UserViewPage()

When('they click on the "Users" button', ()=>{
    userViewPage.accessUserViewPage();
})

Then('the system should display cards for all registered users', ()=>{
    cy.url().should('include', '/users');
})

