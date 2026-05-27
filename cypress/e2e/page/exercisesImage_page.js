import ExercisesImageElements from "../elements/exercisesImage_elements";

const ei = new ExercisesImageElements()

class ExercisesImagePage {

    validateExerciseIsListed(name) {
        ei.exerciseItem(name)
            .should('exist')
            .and('be.visible')
    }

    validateAvatarIsDisplayed(name) {
        ei.avatar(name)
            .should('exist')
            .and('be.visible')
    }

    validateAvatarImageDisplayed(name) {
        ei.avatarImage(name)
            .should('exist')
            .and('be.visible')
    }

    validateDefaultIconIsNotDisplayed(name) {
        ei.avatarIcon(name)
            .should('not.exist')
    }

    validateImageLinkDisplayed(name) {
        ei.viewImageLink(name)
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'target', '_blank')
    }


}

export default ExercisesImagePage
