/// <reference types="Cypress" />

describe('Fast Flow to Purchase', () => {
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

    it('Security', () => {
        cy.get('[href*="security"]').click()
        cy.wait(1000)
        cy.get('.text-lg').contains('Password')
    });

    // bug? I couldn't update password with the script, maybe a security
    it.skip('ChangePassword_1', () => {
        cy.get('#old-password').type('123456789')
        cy.get('#password').type('987654321')
        cy.get('#confirm-password').type('987654321')
        cy.wait(2000)
        cy.get('.mt-4').click()
        cy.wait(1000)
    });

    it.skip('loginAgain', () => {
        cy.wait(2000)
        cy.get('#email').type("carlos.mega@objectedge.com")
        cy.get('#password').type("987654321")
        cy.get('.space-y-6 > :nth-child(4) > .flex').click()
        cy.wait(2000)
    });

    it.skip('BackPassword', () => {
        cy.get('[href*="security"]').click()
        cy.wait(1000)
        cy.get('.text-lg').contains('Password')

        cy.get('#old-password').typed('987654321')
        cy.get('#password').typed('123456789')
        cy.get('#confirm-password').typed('123456789')

        cy.get('.mt-4').click()
        cy.wait(1000)
    });

})