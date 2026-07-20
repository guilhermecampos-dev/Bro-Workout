export const ActiveWorkoutElements = {
  userSelect: () => cy.get('#user-select', { timeout: 10000 }),

  userListbox: () => cy.get('ul[role="listbox"]', { timeout: 10000 }),

  userOption: (userName, userEmail) => cy.contains(
    '[role="option"]',
    `${userName} (${userEmail})`,
    { timeout: 10000 }
  ),

  userWorkoutsTitle: (userName) => cy.contains('h6', `Treinos de ${userName}`),

  workoutsContainer: (userName) => ActiveWorkoutElements.userWorkoutsTitle(userName)
    .parent(),

  workoutButton: (userName, workoutName) => ActiveWorkoutElements.workoutsContainer(userName)
    .contains('button', workoutName),

  workoutDetails: () => cy.get('[role="region"]').should('be.visible'),

  exerciseTitle: (workoutName, exerciseName) => ActiveWorkoutElements.workoutDetails(workoutName)
    .contains('h6', exerciseName),

  repetitionsText: (workoutName, repetitions) => ActiveWorkoutElements.workoutDetails(workoutName)
    .contains(`Repetições: ${repetitions}`),

  setsText: (workoutName, sets) => ActiveWorkoutElements.workoutDetails(workoutName)
    .contains(`Execuções: ${sets}`),

  weightText: (workoutName, weight) => ActiveWorkoutElements.workoutDetails(workoutName)
    .contains(`Carga: ${weight} kg`),
}
