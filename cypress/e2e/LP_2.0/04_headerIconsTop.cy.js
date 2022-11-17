


describe('Test top icons in header', () => {
    it('icon user Login B2C', () => {
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
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/account')
    })

    it('logout', () => {
        cy.get('#headlessui-menu-button-6 > .text-primary-400').click()
        cy.get('#headlessui-menu-item-10').click()
    });

    it('icon user Login B2B', () => {
        cy.accessPOC()
        cy.get('#headlessui-menu-button-1 > .text-primary-400').click()
        cy.get('[data-test-id="headlessui-menu-item-5"]').click()
        cy.wait(2000)

        cy.url().should("contain", '/b2blogin')
        cy.get('.min-h-full > :nth-child(1) > .mt-6').contains('Sign in to your account')
        cy.get('#email').type("chetan.bhangale@objectedge.com")
        cy.get('#password').type(Cypress.env('passB2b'))
        cy.get('#companyName').type(Cypress.env('companyNameB2b'))
        cy.get(':nth-child(5) > .flex').click()

        cy.url().should('eq', 'https://poc-objectedge.frontend.site/account')
    })
    it('icon Cart', () => {
        cy.get('.group > .h-6').click()
        cy.get('.pb-12').contains("Shopping Cart")
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/cart')
    });

    it('button Start Shopping', () => {
        cy.get('.w-56').click()
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/')
    });
})