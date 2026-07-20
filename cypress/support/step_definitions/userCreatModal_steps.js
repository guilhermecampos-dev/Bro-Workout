import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import UserCreatModalPage from "../../e2e/page/userCreatModal_page";
import UserViewPage from "../../e2e/page/userView_page";
import { createUniqueUser } from "../factories/testData";


const userCreatModalPage = new UserCreatModalPage()
const userViewPage = new UserViewPage()
let user

When('the user clicks the "Users" button', () => {
    userViewPage.accessUserViewPage();
})

Given('a user without workouts exists through the API', () => {
    user = createUniqueUser('Workout Cypress')

    cy.request('POST', `${Cypress.env('apiUrl')}/users`, user).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.include({
            nome: user.nome,
            email: user.email,
        })
    })
})

When('clicks the "Add Workout" button', () => {
    userCreatModalPage.workoutBtnClick()
})

When('clicks the "Add Workout" button for the API-created user', () => {
    userCreatModalPage.workoutBtnClick(user.email)
})

let workoutName;

When('fills in the "Workout Name" field with {string}', (name) => {
    workoutName = name
    userCreatModalPage.fillWorkoutName(name)
})

When('selects an exercise {string}', (name) => {
    userCreatModalPage.selectExercise(name)
})

When('fills in the number of repetitions {string}', (number) => {
    userCreatModalPage.workoutNumberRepetition(number)
})

When('fills in the number of sets {string}', (number) => {
    userCreatModalPage.workoutSeriesRepetition(number)
})

When('fills in the weight {string}', (number) => {
    userCreatModalPage.workoutWeight(number)
})

When('clicks the "Add Workouts" button', () => {
    userCreatModalPage.newWorkoutBtnClick()
})

Then("the corresponding workout is created on the user's card", () => {
    userCreatModalPage.validateWorkoutCreated(user.email, workoutName)
})
