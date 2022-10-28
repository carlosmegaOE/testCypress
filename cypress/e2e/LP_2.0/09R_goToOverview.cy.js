describe('Checkout Shipping', () => {

    it('Access WebSite', () => {
        cy.visit('https://poc-objectedge.frontend.site/')
    });

    it('accessSecureCheckout', () => {
        cy.visit('https://poc-objectedge.frontend.site/')
        cy.clearCookies()
        cy.get('.absolute > .flex > .font-lato').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/bikes')
        cy.get(':nth-child(5) > .align-center > :nth-child(2) > .font-lato').click()
        cy.get('.mt-6 > .mt-10 > .flex').click()
        cy.wait(3000)
        cy.get('.absolute > .flex').click()
        cy.wait(2000)
        cy.get('.mt-12 > .font-work-sans').should('exist')

        cy.get(':nth-child(3) > .border-transparent').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/checkout')
    });

    it('typedFieldsCustomer', () => {
        cy.get('#firstName').type(Cypress.env('firstName'))
        cy.get('#lastName').type(Cypress.env('lastName'))
        cy.get('#emailAddress').type(Cypress.env('email'));
        cy.get('#streetNumber').type('123t');
    });

    it('typedFieldsShipping', () => {
        cy.get('#streetName').type(Cypress.env('shipping-street-name'))
        cy.get('#city').type(Cypress.env('shipping-city'));
        cy.get('#postalCode').type(Cypress.env('shipping-postalCode'))
        cy.wait(4000)
    });

    it('Finish to payment', () => {
        cy.get('#invoiceId').type('testScriptInvoice')
        cy.wait(2000)
        cy.get('form.mt-6 > .mt-6').click()
        cy.wait(10000)
        cy.get('h2').contains('Oops, there is an error!').should('not.exist')
    });

    it('Order Confirmation', () => {
        cy.wait(10000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/thank-you')
        // cy.get('.md\:w-full > .font-work-sans').contains('Order Confirmation')
    });

})