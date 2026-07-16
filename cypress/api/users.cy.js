describe('Users API CRUD', () => {
  const apiUrl = Cypress.env('apiUrl')

  const createUserPayload = () => {
    const timestamp = Date.now()

    return {
      nome: `API User ${timestamp}`,
      email: `api.user.${timestamp}@email.com`,
      password: '123456'
    }
  }

  it('should create a user via API', () => {
    const user = createUserPayload()

    cy.request({
      method: 'POST',
      url: `${apiUrl}/users`,
      body: user
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('_id')
      expect(response.body.nome).to.eq(user.nome)
      expect(response.body.email).to.eq(user.email)
    })
  })

  it('should get users via API', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/users`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
    })
  })

  it('should update a user via API', () => {
    const user = createUserPayload()

    cy.request({
      method: 'POST',
      url: `${apiUrl}/users`,
      body: user
    }).then((createResponse) => {
      const userId = createResponse.body._id

      cy.request({
        method: 'PUT',
        url: `${apiUrl}/users/${userId}`,
        failOnStatusCode: false,
        body: {
          nome: `${user.nome} Updated`,
          email: user.email,
          password: user.password
        }
      }).then((updateResponse) => {
        expect(updateResponse.status).to.be.oneOf([200, 204])

        cy.request({
          method: 'GET',
          url: `${apiUrl}/users`
        }).then((getResponse) => {
          const updatedUser = getResponse.body.find((apiUser) => apiUser._id === userId)

          expect(updatedUser).to.exist
          expect(updatedUser.nome).to.eq(`${user.nome} Updated`)
        })
      })
    })
  })

  it('should delete a user via API', () => {
    const user = createUserPayload()

    cy.request({
      method: 'POST',
      url: `${apiUrl}/users`,
      body: user
    }).then((createResponse) => {
      const userId = createResponse.body._id

      cy.request({
        method: 'DELETE',
        url: `${apiUrl}/users/${userId}`,
        failOnStatusCode: false,
      }).then((deleteResponse) => {
        expect(deleteResponse.status).to.be.oneOf([200, 204])

        cy.request({
          method: 'GET',
          url: `${apiUrl}/users`
        }).then((getResponse) => {
          const deletedUser = getResponse.body.find((apiUser) => apiUser._id === userId)

          expect(deletedUser).to.not.exist
        })
      })
    })
  })
})