describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('https://app.moberries.com/login')
      cy.get('#email').type('TestUser')
      cy.get('#password').type('TestPW')
    })
  })