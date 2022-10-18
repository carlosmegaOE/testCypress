/// <reference types="Cypress" />

// Part 2 - Commands for refactor and good maintenance 

Cypress.Commands.add('accessPOC', () => {
    cy.visit('https://poc-objectedge.frontend.site/')
})
