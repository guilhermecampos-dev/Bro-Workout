import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterExercisePage from "../../e2e/page/registerExercise_page";
import HomePage from "../../e2e/page/home_page";
import { createUniqueExercise } from "../factories/testData";

const registerExercisePage = new RegisterExercisePage();
const homePage = new HomePage();
let exerciseName;

When('the user navigates to the Exercises page', () => {
  homePage.accessExercisesPage();
})

When('clicks on the Add Exercise button', () => {
  registerExercisePage.clickAddExercise();
});

When('fills in the Exercise Name field with {string}', (name) => {
  exerciseName = name;
  registerExercisePage.fillExerciseName(name);
});

When('fills in the Exercise Name field with a unique name', () => {
  exerciseName = createUniqueExercise().name;
  registerExercisePage.fillExerciseName(exerciseName);
});

When('fills in the Video URL field with {string}', (urlVideo) => {
  registerExercisePage.fillExercisesVideoUrl(urlVideo);
});

When('fills in the Image URL field with {string}', (urlImage) => {
  registerExercisePage.fillExercisesImageUrl(urlImage);
});

When('clicks on the Create button', () => {
  registerExercisePage.clickCreateExercise();
});

Then('the new exercise {string} should be displayed in the exercises list', (name) => {
  registerExercisePage.validateExercisesCreated(name);
});

Then('the new exercise should be displayed in the exercises list', () => {
  registerExercisePage.validateExercisesCreated(exerciseName);
});

Then('an error message should be displayed', () => {
  registerExercisePage.validateErrorMessage('Falha ao criar exercício')
})
