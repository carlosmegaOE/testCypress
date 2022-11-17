/// <reference types="Cypress" />



describe('Request Quote', () => {
    it('Modal Request a Quote', () => {
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

        cy.get('[href="/hybrid-bike"]').click()
        cy.get(':nth-child(1) > .align-center > :nth-child(2) > .font-lato').click()
        cy.get('.mt-6 > .mt-10 > .flex').click()

        cy.get('.absolute > .flex').click()
        cy.get(':nth-child(3) > div > .mt-7').click()
        cy.wait(2000)
    })

    it('Request a Quote', () => {
        cy.get('#headlessui-dialog-title-43').contains("Request A Quote")
    });

})