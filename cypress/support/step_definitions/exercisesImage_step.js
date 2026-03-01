import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../e2e/page/home_page"
import ExercisesImagePage from "../../e2e/page/exercisesImage_page"



const homePage = new HomePage
const exercisesImagePage = new ExercisesImagePage

Given('there is an exercise with a registered image', () => {
  cy.createExercise({
    name: 'Exercicio Teste',
    imageUrl: 'https://url-da-imagem.com/img.jpg',
    videoUrl: 'https://youtube.com'
  })
})

When('clicking on the View Exercises button', ()=>{
    homePage.accessExercisesPage()
})

Then('the image must be displayed in the record', () => {
  const name = 'Exercicio Teste'

  exercisesImagePage.validateExerciseIsListed(name)
  exercisesImagePage.validateAvatarIsDisplayed(name)
  exercisesImagePage.validateAvatarImageIsDisplayed(name)
  exercisesImagePage.validateDefaultIconIsNotDisplayed(name)
})


