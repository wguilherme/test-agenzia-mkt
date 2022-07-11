/// <reference types="cypress" />

describe('health check', () => {

  it('should return error if device is desktop', () => {
    cy.visit('/')
    cy.contains('Acesse essa página no seu navegador mobile')
  }) 

})
