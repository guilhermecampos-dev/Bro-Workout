import HomeElements from "../elements/home_elements";
const homeElements = new HomeElements();

class HomePage{

    accessBroworkoutPage(){
        cy.visit("/")
    }

    accessExercisesPage(){
        cy.get(homeElements.exercisesLink()).first().click()
    }

}export default HomePage;