import { ExercisesElements } from "../elements/exercises_elements";

class ExercisesPage {

  validateWatchVideoButtons() {
    ExercisesElements.watchVideoLinks()
      .should('have.length.greaterThan', 0)
      .each(($videoLink) => {
        cy.wrap($videoLink)
          .should('be.visible')
          .and('not.be.disabled')
          .and('have.attr', 'target', '_blank')
          .and('have.attr', 'rel', 'noopener noreferrer')
      })
  }
}

export default ExercisesPage;
