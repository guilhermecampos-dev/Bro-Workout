// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// ***********************************************
// Custom Commands
// ***********************************************

Cypress.Commands.add('createExercise', (exercise) => {
  const {
    name,
    videoUrl,
    imageUrl
  } = exercise

  cy.visit('/exercises')

  cy.contains('button', 'Adicionar Exercício').click()

  cy.contains('label', 'Nome do Exercício').parent().find('input').type(name)
  cy.contains('label', 'URL do Vídeo').parent().find('input').type(videoUrl)
  cy.contains('label', 'URL da Imagem').parent().find('input').type(imageUrl)

  cy.contains('button', 'Criar').click()

  cy.contains(name).should('exist')
})