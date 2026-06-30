export const UserCreatModalElements = {

    addUserWorkoutButtons: () => cy.get('button').then(($buttons) => (
        Cypress.$($buttons).filter((index, button) => (
            button.innerText.trim().toLowerCase() === 'adicionar treino'
        ))
    )),

    userCardByEmail: (email) => cy.contains('.MuiCard-root', email, { timeout: 15000 }),

    addUserWorkoutbtn: (email) => UserCreatModalElements.userCardByEmail(email)
        .contains('button', /adicionar treino/i),

    workoutDialog: () => cy.get('[role="dialog"]').should('be.visible'),

    inputWorkoutName: () => UserCreatModalElements.workoutDialog()
        .contains('label', 'Nome do Treino')
        .closest('.MuiFormControl-root')
        .find('input'),

    exerciseSelect: () => UserCreatModalElements.workoutDialog()
        .contains('label', 'Exercício')
        .closest('.MuiFormControl-root')
        .find('div[role="combobox"]'),

    inputNumberRepetition: () => UserCreatModalElements.workoutDialog()
        .contains('label', 'Repetições')
        .closest('.MuiFormControl-root')
        .find('input'),

    inputSeriesRepetition: () => UserCreatModalElements.workoutDialog()
        .contains('label', 'Séries')
        .closest('.MuiFormControl-root')
        .find('input'),

    inputWeight: () => UserCreatModalElements.workoutDialog()
        .contains('label', 'Peso (kg)')
        .closest('.MuiFormControl-root')
        .find('input'),

    addWorkoutbtn: () => UserCreatModalElements.workoutDialog()
        .contains('button', 'Adicionar Treino')


}
