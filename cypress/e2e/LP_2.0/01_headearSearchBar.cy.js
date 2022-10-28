describe('Mobile homepage Tests', () => {
    it('Access Page', () => {
        cy.accessPOC()
    })

    it('Search bar, research 1', () => {
        cy.get('#search').type('turbo')
        cy.get('p > a').click()
        cy.get('.bg-zinc-50').contains('Turbo')
    });

    it('Research 2', () => {
        cy.get('#search').type('jump')
        cy.get('p > a').click()
        cy.get('.bg-zinc-50').contains('jump')
    });

    it('No Products Found', () => {
        cy.get('#search').type('xaaa')
        cy.get('p > a').click()
        cy.get('.bg-zinc-50').contains('No products found.')
    });
    
  })