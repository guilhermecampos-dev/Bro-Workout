import { RegisterExercise } from "../elements/registerExercise_elements";

class RegisterExercisePage{

    clickAddExercise() {
        RegisterExercise.addExercisesBtn().click();
    }

    fillExerciseName(name){
        RegisterExercise.inputExerciseName().type(name);
    }

    fillExercisesVideoUrl(urlVideo){
        RegisterExercise.inputUrlVideo().type(urlVideo);
    }

    fillExercisesImageUrl(urlImage){
        RegisterExercise.inputUrlImage().type(urlImage);
    }

    clickCreateExercise(){
       RegisterExercise.createExercisesBtn().click();
    }

    validateExercisesCreated(name){
        cy.contains(name).should('be.visible');
    }

    validateErrorMessage(message) {
        cy.contains(message).should('be.visible')
    }

}

export default RegisterExercisePage;