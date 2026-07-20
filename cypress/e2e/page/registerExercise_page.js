import { RegisterExerciseElements } from "../elements/registerExercise_elements";

class RegisterExercisePage {

    clickAddExercise() {
        RegisterExerciseElements.addExercisesBtn().click();
    }

    fillExerciseName(name) {
        RegisterExerciseElements.inputExerciseName().type(name);
    }

    fillExercisesVideoUrl(urlVideo) {
        RegisterExerciseElements.inputUrlVideo().type(urlVideo);
    }

    fillExercisesImageUrl(urlImage) {
        RegisterExerciseElements.inputUrlImage().type(urlImage);
    }

    clickCreateExercise() {
        RegisterExerciseElements.createExercisesBtn().click();
    }

    validateExercisesCreated(name) {
        cy.contains('span', name).should('be.visible');
    }

    validateErrorMessage(message) {
        cy.contains(message).should('be.visible')
    }

}

export default RegisterExercisePage;
