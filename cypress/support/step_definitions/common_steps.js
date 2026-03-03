import { Given } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../e2e/page/home_page";

const homePage = new HomePage();

Given('the user is on the Home Screen', () => {
  homePage.accessBroworkoutPage();
});