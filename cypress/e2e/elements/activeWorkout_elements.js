export const ActiveWorkoutElements = {
  userSelect: () => cy.get('#user-select', { timeout: 10000 }),

  userOption: (userName, userEmail) => cy.contains(
    '[role="option"]',
    `${userName} (${userEmail})`,
    { timeout: 10000 }
  ),

  userWorkoutsTitle: (userName) => cy.contains('h6', `Treino de ${userName}`),

  workoutButton: (workoutName) => cy.contains('button', workoutName),

  exerciseTitle: (exerciseName) => cy.contains('h6', exerciseName),

  repetitionsText: (repetitions) => cy.contains(`Repetições: ${repetitions}`),

  setsText: (sets) => cy.contains(`Execuções: ${sets}`),

  weightText: (weight) => cy.contains(`Carga: ${weight} kg`),
}
