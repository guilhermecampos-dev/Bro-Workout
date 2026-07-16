export const HomeElements = {
    exercisesLink: () => cy.get('a[href="/exercises"]')
        .filter(':visible')
        .eq(0)
}
