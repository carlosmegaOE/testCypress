describe('Checkout Shipping', () => {
    it('Access Secure Checkout', () => {
        cy.accessPOC()
        cy.accessOverview()
    })

    it.skip('Check DATA user', () => {
    // Check if previous data has been saved properly (telephone and city)
        
    })

})