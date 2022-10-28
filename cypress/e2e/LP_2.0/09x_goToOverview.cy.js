describe('Checkout Shipping', () => {
    it('Access Secure Checkout', () => {
        cy.accessPOC()
        cy.accessOverview()

        cy.get('#invoiceId').type('testScriptInvoice')
        cy.wait(2000)
        cy.get('form.mt-6 > .mt-6').click()

    })

    it.skip('Check DATA user', () => {
    // Check if previous data has been saved properly (telephone and city)
        
    })

})