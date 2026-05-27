import { ActiveWorkoutElements } from "../elements/activeWorkout_elements";

class ActiveWorkoutPage {
  accessActiveWorkoutPage() {
    cy.visit('/active-workout')
  }

  selectUser(userName, userEmail) {
    ActiveWorkoutElements.userSelect().click()
    ActiveWorkoutElements.userOption(userName, userEmail).click()
  }

  expandWorkout(userName, workoutName) {
    ActiveWorkoutElements.userWorkoutsTitle(userName).should('be.visible')
    ActiveWorkoutElements.workoutButton(workoutName).click()
  }

  validateWorkoutDetails(exerciseName, repetitions, sets, weight) {
    ActiveWorkoutElements.exerciseTitle(exerciseName).should('be.visible')
    ActiveWorkoutElements.repetitionsText(repetitions).should('be.visible')
    ActiveWorkoutElements.setsText(sets).should('be.visible')
    ActiveWorkoutElements.weightText(weight).should('be.visible')
  }
}

export default ActiveWorkoutPage
