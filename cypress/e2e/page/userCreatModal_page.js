import { UserCreatModalElements } from "../elements/userCreatModal_elements";

class UserCreatModalPage {

    workoutBtnClick() {
        UserCreatModalElements.addUserWorkoutbtn().first().click()
    }

    fillWorkoutName(name) {
        UserCreatModalElements.inputWorkoutName().type(name)
    }

    selectExercise(name) {
        UserCreatModalElements.exerciseSelect().click()

        cy.get('body')
            .find('ul[role="listbox"]', { timeout: 10000 })
            .should('exist') 
            .as('dropdown')

        cy.get('@dropdown')
            .contains('li', name)
            .click({ force: true })
    }

    workoutNumberRepetition(number){
        UserCreatModalElements.inputNumberRepetition().type(number)
    }

    workoutSeriesRepetition(number){
        UserCreatModalElements.inputSeriesRepetition().type(number)
    }

    workoutWeight(number){
        UserCreatModalElements.inputWeight().type(number)
    }

    newWorkoutBtnClick() {
        UserCreatModalElements.addWorkoutbtn().click()
    }



}
export default UserCreatModalPage
