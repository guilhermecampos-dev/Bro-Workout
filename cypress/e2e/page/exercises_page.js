import { ExercisesElements } from "../elements/exercises_elements";

class ExercisesPage {

  validateWatchVideoButtons() {
    cy.get(ExercisesElements.btnWatchVideo)
      .first()
      .should('be.visible') 
      .and('not.be.disabled')
      .should('have.text', 'Assistir Vídeo')
      .and('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noopener noreferrer')

    cy.get(ExercisesElements.btnWatchVideo).first()
      .invoke('attr', 'href').should('include', 'https://');
  }
}

export default ExercisesPage;