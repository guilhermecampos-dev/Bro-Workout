import { ExercisesElements } from "../elements/exercises_elements";

class ExercisesPage {

    validateWatchVideoButtons() {
        cy.get(ExercisesElements.btnWatchVideo)
            .should('be.visible').and('have.length.at.least', 1);
    }
}
export default ExercisesPage;