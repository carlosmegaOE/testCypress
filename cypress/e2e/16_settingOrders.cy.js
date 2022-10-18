/// <reference types="Cypress" />

describe.skip('Fast Flow to Purchase', () => {
    it('Access Page', () => {
        cy.accessPOC()
    })

    it('login', () => {
        cy.visit('https://poc-objectedge.frontend.site/')
        cy.get('.text-gray-700 > .h-6').click()
        cy.wait(2000)
        cy.url().should("contain", '/login')
        cy.get('.min-h-full > :nth-child(1) > .mt-6').contains('Sign in to your account')
        cy.get('#email').type("carlos.mega@objectedge.com")
        cy.get('#password').type("123456789")
        cy.get('.space-y-6 > :nth-child(4) > .flex').click()
        cy.wait(2000)
    })

    it('MyAccount', () => {
        cy.get('.pt-10 > :nth-child(1) > .text-center').contains('Settings')
        cy.get(':nth-child(3) > .mt-1 > .grow').contains('carlos.mega@objectedge.com')
        cy.wait(2000)
        // cy.get('#headlessui-menu-button-2 > .h-6').click()
    });

    it('Order', () => {
        cy.get('[href*="order"]').click()
        cy.wait(1000)
        cy.get('.text-lg').contains('My order history')
    });


})