import { UserCreatModalElements } from "../elements/userCreatModal_elements";

class UserCreatModalPage {

    workoutBtnClick(userEmail) {
        if (userEmail) {
            UserCreatModalElements.addUserWorkoutbtn(userEmail)
                .should('be.visible')
                .click()
            return
        }

        UserCreatModalElements.addUserWorkoutButtons()
            .should('have.length.greaterThan', 0)
            .eq(0)
            .click()
    }

    fillWorkoutName(name) {
        UserCreatModalElements.inputWorkoutName().type(name)
    }

    selectExercise(name) {
        UserCreatModalElements.exerciseSelect().click()

        cy.contains('li[role="option"]', name, { timeout: 10000 })
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

    validateWorkoutCreated(userEmail, workoutName) {
        UserCreatModalElements.userCardByEmail(userEmail)
            .contains(workoutName)
            .should('be.visible')
    }



}
export default UserCreatModalPage
