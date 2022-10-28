describe('Menu Header', () => {
    it('Menu Horizontal', () => {
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
  })