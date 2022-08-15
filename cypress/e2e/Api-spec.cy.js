
describe('API Test', () => {
  it('Get-list user', () => {
    // to visit a page use visit()
    //  cy.login()

    // to test API we use request()
    // click on get and righ-click on request to copy the link
    cy.request('GET','/api/users?page=2').then((response) => {

      expect(response.status).equal(200)
      // zero index 
      expect(response.body.data[0].first_name).equal('Michael')

    })

  })
  it('Post - Create user', () => {
    var user = {
      "name": "morpheus",
      "job": "leader"
      }

    cy.request('POST','/api/users',user).then((response) => {
      expect(response.status).equal(201)
      expect(response.body.name).equal(user.name)
      expect(response.body.job).equal(user.job)
    })
})
  it('UPDATE - user', () => {
    var user1 = {
      "name": "George",
      "job": "Architect"
  }
    cy.request('PUT', '/api/users/2', user1).then((response) => {
      expect(response.status).equal(200)
      expect(response.body.name).equal(user1.name)
      expect(response.body.job).equal(user1.job)
    })
  })
  it('DELETE - user', () => {
    cy.request('DELETE', '/api/users/2').then((response) => {
      expect(response.status).equal(204)
    })
  })
})