


describe('Menu Header', () => {
    it('Menu Horizontal Options', () => {
        cy.accessPOC()
        cy.wait(1000)
        cy.get('[href="/road-bike"]').click()
        cy.wait(2500)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/road-bike')

        cy.get('[href="/hybrid-bike"]').click()
        cy.wait(2500)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/hybrid-bike')

        cy.get('[href="/mountain-bike"]').click()
        cy.wait(2500)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/mountain-bike')

        cy.get('[href="/parts"]').click()
        cy.wait(2500)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/parts')

        cy.get('[href="/contact"]').click()
        cy.wait(2500)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/contact')
    })

    it('Help me Choose a bike', () => {
        cy.get('[href="/helpmechoosemybike"]').click()
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/helpmechoosemybike')
        cy.wait(5000)
        cy.get('#easyXDM_default2213_provider')
    });

    it('Logo', () => {
        cy.get('.h-16 > .transition-300').click()
        cy.wait(3000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/')

    });

    it('Main Button - CTA "See our bikes!"', () => {
        cy.get('.absolute > .flex > .font-lato').click()
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/bikes')
    });
})