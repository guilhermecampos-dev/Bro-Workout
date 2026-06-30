import { HomeElements } from "../../e2e/elements/home_elements";

class HomePage {

    accessBroworkoutPage() {
        cy.visit("/")
    }

    accessExercisesPage() {
        HomeElements.exercisesLink().should('be.visible').click();
    }



} export default HomePage;
