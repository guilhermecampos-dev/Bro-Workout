import { ActiveWorkoutElements } from "../elements/activeWorkout_elements";

class ActiveWorkoutPage {
  accessActiveWorkoutPage() {
    cy.visit('/active-workout')
  }

  selectUser(userName, userEmail) {
    ActiveWorkoutElements.userSelect().click()
    ActiveWorkoutElements.userOption(userName, userEmail).click({ force: true })
  }

  expandWorkout(userName, workoutName) {
    ActiveWorkoutElements.userWorkoutsTitle(userName).should('be.visible')
    ActiveWorkoutElements.workoutButton(userName, workoutName).click()
  }

  validateWorkoutDetails(workoutName, exerciseName, repetitions, sets, weight) {
    ActiveWorkoutElements.exerciseTitle(workoutName, exerciseName).should('be.visible')
    ActiveWorkoutElements.repetitionsText(workoutName, repetitions).should('be.visible')
    ActiveWorkoutElements.setsText(workoutName, sets).should('be.visible')
    ActiveWorkoutElements.weightText(workoutName, weight).should('be.visible')
  }
}

export default ActiveWorkoutPage
