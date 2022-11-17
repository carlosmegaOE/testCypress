


describe('Research Tests', () => {
    it('Search bar, research "turbo"', () => {
        cy.accessPOC()
        cy.get('#search').type('turbo')
        cy.get('p > a').click()
        cy.get('.bg-zinc-50').contains('Turbo')
    });

    it('Research the text "jump"', () => {
        cy.get('#search').type('jump')
        cy.get('p > a').click()
        cy.get('.bg-zinc-50').contains('jump')
    });

    it('No Products Found "xaaa"', () => {
        cy.get('#search').type('xaaa')
        cy.get('p > a').click()
        cy.get('.bg-zinc-50').contains('No products found.')
    });

    it('Research incorrect text', () => {
        cy.get('#search').type('xaaa')
        cy.get('p > a').click()
        cy.get('.bg-zinc-50').contains('No products found.')
    });

    it('Research incomplete tex "turb"', () => {
        cy.get('#search').type('turb')
        cy.get('p > a').click()
        cy.get('.bg-zinc-50').contains('No products found.')
        cy.get('.bg-zinc-50').contains('Turbo')
    });

})