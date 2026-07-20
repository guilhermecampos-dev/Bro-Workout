import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../e2e/page/home_page"
import ExercisesImagePage from "../../e2e/page/exercisesImage_page"
import { createUniqueExercise } from "../factories/testData"

const homePage = new HomePage
const exercisesImagePage = new ExercisesImagePage
let exercise

Given('there is an exercise with a registered image', () => {
  exercise = createUniqueExercise()

  cy.createExercise(exercise)
})

When('clicking on the View Exercises button', () => {
  homePage.accessExercisesPage()
})

Then('the image link must be displayed in the record', () => {
  exercisesImagePage.validateExerciseIsListed(exercise.name)
  exercisesImagePage.validateAvatarIsDisplayed(exercise.name)
  exercisesImagePage.validateImageLinkDisplayed(exercise.name)
})
