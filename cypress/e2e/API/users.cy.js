describe('Users API', () => {

  it('should get users via API', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}/users`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
    })
  })

})
