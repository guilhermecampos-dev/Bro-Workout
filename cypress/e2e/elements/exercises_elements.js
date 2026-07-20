export const ExercisesElements = {
    exerciseItems: () => cy.get('li.MuiListItem-root'),

    watchVideoLinks: () => cy.get('a[href*="youtube.com"], a[href*="youtu.be"]')
}
