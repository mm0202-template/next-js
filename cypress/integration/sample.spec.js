/// <reference types="cypress" />

context('Sample', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('sample', () => {
    cy.get('.for-cypress-check').should('have.text', 'Cypress is good!!')
  })
})
