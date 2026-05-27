import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../e2e/page/home_page"
import ExercisesImagePage from "../../e2e/page/exercisesImage_page"

const homePage = new HomePage
const exercisesImagePage = new ExercisesImagePage
let exerciseName

Given('there is an exercise with a registered image', () => {
  exerciseName = `Exercicio Teste ${Date.now()}`

  cy.createExercise({
    name: exerciseName,
    imageUrl: 'https://placehold.co/120x120.png',
    videoUrl: 'https://youtube.com'
  })
})

When('clicking on the View Exercises button', () => {
  homePage.accessExercisesPage()
})

Then('the image link must be displayed in the record', () => {
  exercisesImagePage.validateExerciseIsListed(exerciseName)
  exercisesImagePage.validateAvatarIsDisplayed(exerciseName)
  exercisesImagePage.validateImageLinkDisplayed(exerciseName)
})
