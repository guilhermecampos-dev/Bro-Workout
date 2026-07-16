export const UserViewElements = {
    usersLink: () => cy.get('a[href="/users"]')
        .filter(':visible')
        .eq(0)
}
