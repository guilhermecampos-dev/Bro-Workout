import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../e2e/page/home_page";
import ExercisesPage from "../../e2e/page/exercises_page";

const exercisesPage = new ExercisesPage();
const homePage = new HomePage();

Given('the user is on the exercise list page', () => {
    homePage.accessBroworkoutPage();
    homePage.accessExercisesPage();
});

Then('a "Watch video" button must exist for each exercise in the list', () => {
    exercisesPage.ValidateWatchVideoButtons();
    //exercisesPage.clickWatchVideo();

});