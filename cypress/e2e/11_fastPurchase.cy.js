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
        cy.get('.h-16 > .transition-300').click()
    })

    it('Click on btn of hero image', () => {
        cy.get('.absolute > .flex > .font-lato').click()
        cy.wait(1000)
    })

    it('Access PLP', () => {
        cy.url().should("contain", '/bikes')
        cy.get(':nth-child(1) > .p-4 > :nth-child(2) > .font-lato').click()
        // fix add to cart the buttons side, the count is correct but the behaviour of close btns NO
    })

    it('Choose two QTY of the product and add to Cart', () => {
        cy.get('.text-3xl').should("contain", 'Turbo')
        cy.get('.border-neutral-200 > :nth-child(3)').click()
        cy.wait(2000)
        cy.get('.mt-10 > .border-neutral-200').contains('2')
        cy.get('.mt-6 > .mt-10 > .flex').click()
        cy.wait(3000)
        cy.get('.absolute > .flex').click()
        cy.wait(2000)
    })

    it('Cart page', () => {
        // cy.url().should("contain", '/cart')
        cy.get('.mt-12 > .font-work-sans').contains('Shopping Cart')
        cy.wait(3000)
        cy.get(':nth-child(3) > .border-transparent').click()


    })

    it('Checkout Page', () => {
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/checkout')
        cy.get('.mb-10').contains('Shipping & Pick up Options')
        cy.wait(2000)

    })

    it('Typed the fields in Shipping Page', () => {
        cy.typedFieldsCustomer();
        cy.typedFieldsShipping(); //bug in city , check // bug in radio buttons //bug in message in Shipping
        // cy.wait(4000)
    })

    it('Go to Overview', () => {
        cy.get('.rounded-lg > :nth-child(4) > .font-lato').click()
        cy.wait(2000)
    })

    it('Review my Information', () => {
        // cy.get('.mb-10').contains("Review")
        cy.get(':nth-child(1) > .pt-3').contains( 'Carlos Mega')
        cy.get('.flex > :nth-child(1) > :nth-child(3)').contains( 'Rua Sao Clemente, S')
        cy.get('.flex > :nth-child(1) > :nth-child(4)').contains('22260009')
        //bug in values Review Order and signal
    })


    it('Click on Place Order', () => {
        cy.get('.rounded-lg > :nth-child(4) > .font-lato').click()
    })

    it('Payment', () => {
        cy.wait(6000)
        cy.get('.adyen-checkout__field--cardNumber > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input > .js-iframe').should('exist')
        cy.get('.space-5 > :nth-child(1) > .font-medium').contains('€').should('not.exist')
        
    })

})