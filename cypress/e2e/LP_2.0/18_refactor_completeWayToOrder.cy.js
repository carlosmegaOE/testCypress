
require('@shelex/cypress-allure-plugin');
// Direct test, with no custom commands or pageObjects

describe('Refactor - Complete Order Flow', () => {
    it('Refactor - Flow to Checkout', () => {
        cy.visit('https://poc-objectedge.frontend.site/')
        cy.clearCookies()
        cy.get('[href="/hybrid-bike"]').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/hybrid-bike')
        cy.get(':nth-child(1) > .align-center > :nth-child(2) > .font-lato').click()
        cy.get('.mt-6 > .mt-10 > .flex').click()
        cy.wait(3000)
        cy.get('.absolute > .flex').click()
        cy.wait(2000)
        cy.get('.mt-12 > .font-work-sans').should('exist')

        cy.get(':nth-child(3) > .border-transparent').click()
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/checkout')
    });

    it('typed Fields on Shipping and Pay', () => {
        cy.get('#firstName').type(Cypress.env('firstName'))
        cy.get('#lastName').type(Cypress.env('lastName'))
        cy.get('#emailAddress').type(Cypress.env('email'));
        cy.get('#streetNumber').type('123t');

        cy.get('#streetName').type(Cypress.env('shipping-street-name'))
        cy.get('#city').type(Cypress.env('shipping-city'));
        cy.get('#postalCode').type(Cypress.env('shipping-postalCode'))
        cy.get('#invoiceId').type('testScriptInvoice')
        cy.get('#invoiceId').type('testScriptInvoice')

        cy.get('form.mt-6 > .mt-6').click()
    });

    it('Check Order Confirmation', () => {
        cy.wait(10000)    // Confirmation of request, need some time to response
        // cy.get('.md\:w-full > .font-work-sans').contains('Order Confirmation')
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/thank-you')
        cy.get('h2').contains('Oops, there is an error!').should('not.exist')
    })


})