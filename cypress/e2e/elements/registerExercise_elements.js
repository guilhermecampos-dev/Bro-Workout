export const RegisterExercise = {

    addExercisesBtn: () => cy.contains('button', 'Adicionar Exercício'),

    inputExerciseName: () => cy.contains('label', 'Nome do Exercício')
        .parent().find('input'),

    inputUrlVideo: () => cy.contains('label', 'URL do Vídeo (opcional)')
        .parent().find('input'),

    inputUrlImage: () => cy.contains('label', 'URL da Imagem (opcional)')
        .parent().find('input'),

    createExercisesBtn: () => cy.contains('button', 'Criar'),

}