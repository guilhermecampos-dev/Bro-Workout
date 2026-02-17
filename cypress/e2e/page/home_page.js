import { HomeElements } from "../../e2e/elements/home_elements";

class HomePage{

    accessBroworkoutPage(){
        cy.visit("/")
    }

    accessExercisesPage() {
        cy.get(HomeElements.btnExercises).first().click();
    }



}export default HomePage;