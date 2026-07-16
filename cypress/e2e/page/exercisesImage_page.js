import { ExercisesElements } from "../elements/exercisesImage_elements";

class ExercisesImagePage {

    validateExerciseIsListed(name) {
        ExercisesElements.exerciseItem(name)
            .should('exist')
            .and('be.visible')
    }

    validateAvatarIsDisplayed(name) {
        ExercisesElements.avatar(name)
            .should('exist')
            .and('be.visible')
    }

    validateAvatarImageDisplayed(name) {
        ExercisesElements.avatarImage(name)
            .should('exist')
            .and('be.visible')
    }

    validateDefaultIconIsNotDisplayed(name) {
        ExercisesElements.avatarIcon(name)
            .should('not.exist')
    }

    validateImageLinkDisplayed(name) {
        ExercisesElements.viewImageLink(name)
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'target', '_blank')
    }

}

export default ExercisesImagePage
