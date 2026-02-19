class ExercisesImagePage {
  validateImageButtonExists() {
    cy.get('a[href$=".jpg"]').should('have.length.at.least', 1)
    .and('be.visible').and('have.attr', 'href').and('include', '.jpg');
  }

  
}

export default ExercisesImagePage;
