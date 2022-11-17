


describe('Checkout Shipping', () => {
    it('Access Checkout', () => {
        cy.accessPOC()
        cy.accessOverview()

        cy.get('#invoiceId').type('testScriptInvoice')
        cy.wait(2000)
        cy.get('form.mt-6 > .mt-6').click()
    })

    it('Check Order Number - thank-you page', () => {
        cy.wait(10000)    // Confirmation of request, need some time to response
        // cy.get('.md\:w-full > .font-work-sans').contains('Order Confirmation')
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/thank-you')
        cy.get('h2').contains('Oops, there is an error!').should('not.exist')
    })

})