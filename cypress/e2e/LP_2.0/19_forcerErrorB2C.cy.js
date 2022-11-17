
require('@shelex/cypress-allure-plugin');

describe('zErrors - Other types of tests', () => {
    it('General Test', () => {
        cy.visit('https://poc-objectedge.frontend.site/')
        cy.clearCookies()
        cy.get('[href="/hybrid-bike"]').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/hybrid') // incomplete url
        cy.get(':nth-child(1) > .align-center > :nth-child(2) > .font-lato').click()
        cy.get('.mt-6 > .mt-10 > .flex').click()
        cy.wait(3000)
        cy.get('.absolute > .flex').click()
        cy.wait(2000)
        cy.get('.mt-12 > .font-work-sans').should('exist')  // exist

        cy.get(':nth-child(3) > .border-transparent').click()
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/checkout')
    });

})