import { ExercisesElements } from "../elements/exercises_elements";

class ExercisesPage{

    ValidateWatchVideoButtons(){
        cy.get(ExercisesElements.btnWatchVideo)
        .should('be.visible').and('have.length.at.least', 1);
    }

    /*clickWatchVideo() {
        
        cy.get(ExercisesElements.btnWatchVideo)
            .first()
            .invoke('removeAttr', 'target')
            .click();
            
        
        cy.url().should('include', 'youtube.com');
    }*/

    
}

export default ExercisesPage;