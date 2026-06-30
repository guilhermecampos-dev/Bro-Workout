import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ActiveWorkoutPage from "../../e2e/page/activeWorkout_page";
import { createUniqueUser, createWorkout } from "../factories/testData";

const activeWorkoutPage = new ActiveWorkoutPage()

let user
let workout

Given('a user with a workout exists through the API', () => {
  const apiUrl = Cypress.env('apiUrl')

  user = createUniqueUser()
  workout = createWorkout()

  cy.request('POST', `${apiUrl}/users`, user).then((createResponse) => {
    expect(createResponse.status).to.eq(201)
    expect(createResponse.body).to.include({
      nome: user.nome,
      email: user.email,
    })

    cy.request('PATCH', `${apiUrl}/users/${createResponse.body._id}/treinos`, workout).then((workoutResponse) => {
      expect(workoutResponse.status).to.be.oneOf([200, 201])

      const createdWorkout = workoutResponse.body.treinos.find((treino) => treino.nome === workout.nome)
      expect(createdWorkout).to.exist
      expect(createdWorkout.series[0]).to.include({
        exercicio: workout.series[0].exercicio,
        repeticoes: workout.series[0].repeticoes,
        execucoes: workout.series[0].execucoes,
        carga: workout.series[0].carga,
      })
    })
  })

  cy.request('GET', `${apiUrl}/users`).then((usersResponse) => {
    expect(usersResponse.status).to.eq(200)

    const createdUser = usersResponse.body.find((apiUser) => apiUser.email === user.email)
    expect(createdUser).to.include({
      nome: user.nome,
      email: user.email,
    })
  })
})

When('the user opens the Active Workout page', () => {
  activeWorkoutPage.accessActiveWorkoutPage()
})

When('selects the API-created user', () => {
  activeWorkoutPage.selectUser(user.nome, user.email)
})

When('expands the API-created workout', () => {
  activeWorkoutPage.expandWorkout(user.nome, workout.nome)
})

Then('the workout details should be displayed correctly', () => {
  activeWorkoutPage.validateWorkoutDetails(
    Cypress.env('activeWorkoutExerciseName'),
    workout.series[0].repeticoes,
    workout.series[0].execucoes,
    workout.series[0].carga
  )
})
