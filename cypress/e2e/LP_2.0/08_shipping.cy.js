describe('Checkout Shipping', () => {
    it('Access Secure Checkout', () => {
        cy.accessPOC()
        cy.accessSecureCheckout()
    })

//show tooltip email and other fields , obligations
})