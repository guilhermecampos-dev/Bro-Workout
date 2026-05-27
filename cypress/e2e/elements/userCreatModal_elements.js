export const UserCreatModalElements = {

    addUserWorkoutbtn: () => cy.contains('button', 'Adicionar Treino'),

    inputWorkoutName: () => cy.contains('label', 'Nome do Treino')
        .parent().find('input'),

    exerciseSelect: () => cy.contains('label', 'Exercício')
        .parent()
        .find('div[role="combobox"]'),

    inputNumberRepetition: () => cy.contains('label', 'Repetições')
        .parent().find('input'),

    inputSeriesRepetition: () => cy.contains('label', 'Séries')
        .parent().find('input'),

    inputWeight: () => cy.contains('label', 'Peso (kg)')
        .parent().find('input'),

    addWorkoutbtn: () => cy.get('[role="dialog"]')
        .should('exist')
        .contains('button', 'Adicionar Treino')


}
