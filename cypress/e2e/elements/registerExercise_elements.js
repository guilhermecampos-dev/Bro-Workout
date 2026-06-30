export const RegisterExercise = {

    addExercisesBtn: () => cy.contains('button', 'Adicionar Exercício'),

    formControlByLabel: (label) => cy.contains('label', label)
        .closest('.MuiFormControl-root'),

    inputExerciseName: () => cy.contains('label', 'Nome do Exercício')
        .closest('.MuiFormControl-root').find('input'),

    inputUrlVideo: () => cy.contains('label', 'URL do Vídeo (opcional)')
        .closest('.MuiFormControl-root').find('input'),

    inputUrlImage: () => cy.contains('label', 'URL da Imagem (opcional)')
        .closest('.MuiFormControl-root').find('input'),

    createExercisesBtn: () => cy.contains('button', 'Criar'),

}
