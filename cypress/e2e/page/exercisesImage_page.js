import { ExercisesImageElements as ei } from "../elements/exercisesImage_elements";

class ExercisesImagePage {

validateExerciseIsListed(name){
    ei.exerciseItem(name)
    .should('exist')
    .and('be.visible')
}

validateAvatarIsDisplayed(name){
    ei.avatar(name)
    .should('exist')
    .and('be.visible')
}

validateAvatarImageDisplayed(name){
    ei.avatarImage(name)
    .should('exist')
    .and('be.visible')
}

validateDefaultIconIsNotDisplayed(name){
    ei.avatarIcon(name)
    .should('not.exist')
}


}export default ExercisesImagePage