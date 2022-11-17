/// <reference types="Cypress" />



describe('Settings - Menu My Account', () => {
    it('login', () => {
        cy.accessPOC()
        cy.get('#headlessui-menu-button-1 > .text-primary-400').click()
        cy.get('[data-test-id="headlessui-menu-item-4"]').click()
        cy.wait(2000)

        cy.url().should("contain", '/login')
        cy.get('.min-h-full > :nth-child(1) > .mt-6').contains('Sign in to your account')
        cy.get('#email').type("carlos.mega@objectedge.com")
        cy.get('#password').type(Cypress.env('passValid'))
        cy.get('.space-y-6 > :nth-child(4) > .flex').click()
        cy.wait(2000)
    })

    it('MyAccount', () => {
        cy.get('.pt-10 > :nth-child(1) > .text-center').contains('Settings')
        cy.get(':nth-child(3) > .mt-1 > .grow').contains('carlos.mega@objectedge.com')
        cy.wait(2000)
        // cy.get('#headlessui-menu-button-2 > .h-6').click()
    });

    it('Address', () => {
        cy.get('[href*="addresses"]').click()
        cy.wait(1000)
        cy.get('.text-lg').contains('My Address')
    });

    it('Order', () => {
        cy.get('[href*="order"]').click()
        cy.wait(1000)
        cy.get('.text-lg').contains('My order history')
    });

    it('Security', () => {
        cy.get('[href*="security"]').click()
        cy.wait(1000)
        cy.get('.text-lg').contains('Password')
    });

})