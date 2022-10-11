/// <reference types="Cypress" />

describe('Fast Flow to Purchase', () => {
    it('Access Page', () => {
        cy.accessPOC()
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
        //Doubt - I only can access the cart page if I click in the icon on top ?
    })

    it('Cart page add +1 QTY of the product', () => {
        // cy.url().should("contain", '/cart')
        cy.get('.mt-12 > .font-work-sans').contains('Shopping Cart')
        cy.wait(3000)
        cy.get('.rounded-r > .m-auto').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .relative > .flex').contains('3')
        cy.wait(3000)
        cy.get(':nth-child(3) > .border-transparent').submit()
        cy.wait(3000)


    })

    it('Checkout Page', () => {
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/checkout')
        cy.get('.mb-10').contains('Shipping & Pick up Options')
        cy.wait(2000)

    })

    it('Typed the fields in Shipping Page', () => {
        cy.typedFieldsCustomer();
        cy.typedFieldsShipping(); //bug in city , check // bug in radio buttons //bug in message in Shipping
    })

    it('Go to Overview', () => {
        cy.get('form').submit()
        // cy.get('.rounded-lg > :nth-child(4) > .font-lato').click()
    })

    // it('Review my Information', () => {
    //     // cy.get('.mb-10').contains("Review")
    //     cy.get(':nth-child(1) > .pt-3').contains( 'Carlos Mega')
    //     cy.get('.flex > :nth-child(1) > :nth-child(3)').contains( 'Rua São Clemente, Rio de Janeiro')
    //     cy.get('.flex > :nth-child(1) > :nth-child(4)').contains('22260009')
    //     //bug in values Review Order and signal
    // })


    // it('Click on Place Order', () => {
    //     cy.get('.rounded-lg > :nth-child(4) > .font-lato').click()
    //     //bug in values Review Order and signal
    // })

    // it('Review Order Information', () => {
    //     cy.get('.flex > :nth-child(1) > :nth-child(4)').contains('€').should('not.exist')
    //     //bug in values Review Order and signal
    // })

})