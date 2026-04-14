describe('Users API', () => {

  it('should get users via API', () => {
    cy.request({
      method: 'GET',
      url: 'https://broworkout.back.brothertec.com.br/users'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
    })
  })

})