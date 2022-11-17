


describe('Mobile homepage Tests', () => {

    it('Menu Hamburguer access options', () => {
        cy.accessPOC()
        cy.viewport('iphone-x')
        cy.get('.-ml-2').click()
        cy.wait(2000)

        cy.get('.space-y-6 > :nth-child(1) > .-m-2').contains('Help me choose a Bike')
        cy.get('.space-y-6 > :nth-child(1) > .-m-2').click()
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/helpmechoosemybike')

        cy.get('.-ml-2').click()
        cy.get('.space-y-6 > :nth-child(2) > .-m-2').contains('Road & Circuit')
        cy.get('.space-y-6 > :nth-child(2) > .-m-2').click()
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/road-bike')

        cy.get('.-ml-2').click()
        cy.get('.space-y-6 > :nth-child(3) > .-m-2').contains('Hybrid & Leisure')
        cy.get('.space-y-6 > :nth-child(3) > .-m-2').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/hybrid-bike')

        cy.get('.-ml-2').click()
        cy.get('.space-y-6 > :nth-child(4) > .-m-2').contains('Mountain & Dirt')
        cy.get('.space-y-6 > :nth-child(4) > .-m-2').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/mountain-bike')

        cy.get('.-ml-2').click()
        cy.get(':nth-child(5) > .-m-2').contains('Parts')
        cy.get(':nth-child(5) > .-m-2').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/parts')

        cy.get('.-ml-2').click()
        cy.get(':nth-child(6) > .-m-2').contains('Contact Us')
        cy.get(':nth-child(6) > .-m-2').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/contact')
        cy.wait(2000)

        cy.get('.h-16 > .h-full').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/')

        cy.get('.absolute > .flex > .font-lato').click()
        cy.wait(2000)
        cy.url().should('eq', 'https://poc-objectedge.frontend.site/bikes')
    })

    it('Access PDP on mobile responsiveness', () => {
        cy.viewport('iphone-x')
        cy.get(':nth-child(1) > .p-4 > :nth-child(2) > .font-lato').click()

    })
})