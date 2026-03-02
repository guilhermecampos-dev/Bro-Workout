import ExercisesImageElements from "../elements/exercisesImage_elements";

const ei = new ExercisesImageElements()

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


}
    
export default ExercisesImagePage