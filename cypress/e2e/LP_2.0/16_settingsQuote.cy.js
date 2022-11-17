/// <reference types="Cypress" />



describe('Settings Quote', () => {
    it('Quote list - Settings', () => {
        cy.accessPOC()

        cy.get('#headlessui-menu-button-1 > .text-primary-400').click()
        cy.wait(2000)
        cy.get('[data-test-id="headlessui-menu-item-5"]').click()
        cy.url().should("contain", '/b2blogin')
        cy.get('.min-h-full > :nth-child(1) > .mt-6').contains('Sign in to your account')
        cy.get('#email').type(Cypress.env('mailB2b'))
        cy.get('#password').type(Cypress.env('passB2b'))
        cy.get('#companyName').type(Cypress.env('companyNameB2b'))

        cy.get(':nth-child(5) > .flex').click()
        cy.wait(2000)

        cy.get('[href="#quotes"]').click()
        cy.wait(1000)
        cy.get('.text-lg').contains('My quotes history')
        cy.wait(1000)
    })

    it('Modal - Quote Details ', () => {
        cy.get(':nth-child(6) > .w-full').click()
        cy.get('.text-center > .text-3xl').contains("Quote Details")
    });

    it('Modal Quote Request - Button Place Order', () => {

    });
})