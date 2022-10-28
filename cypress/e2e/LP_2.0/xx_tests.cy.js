/// <reference types="Cypress" />

describe('Icon user ', () => {
    it('without Login', () => {
        cy.accessPOC()
        cy.get('.text-gray-700 > .h-6 > path').click();
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/login')
    })

    it('Login', () => {
        cy.get('.min-h-full > :nth-child(1) > .mt-6').contains('Sign in to your account')
        cy.get('#email').type("carlos.mega@objectedge.com")
        cy.get('#password').type("123456789")
        cy.get('.space-y-6 > :nth-child(4) > .flex').click()
        cy.wait(2000)
    });

    it('Test Icon in Header - logged in', () => {
        cy.get('.h-16 > .transition-300').click()
        cy.wait(2000)
        cy.get('#headlessui-menu-button-2 > .h-6').click()
        cy.wait(2000)
    });
})