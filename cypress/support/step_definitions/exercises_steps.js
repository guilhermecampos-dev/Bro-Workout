import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../e2e/page/home_page";
import ExercisesPage from "../../e2e/page/exercises_page";

const exercisesPage = new ExercisesPage();
const homePage = new HomePage();

When('the user is on the exercise list page', () => {
    homePage.accessExercisesPage();
});

Then('the rendered "Watch video" buttons must be valid', () => {
    exercisesPage.validateWatchVideoButtons();
});
