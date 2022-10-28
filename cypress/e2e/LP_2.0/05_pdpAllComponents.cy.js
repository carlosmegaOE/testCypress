describe('PDP test components', () => {
    it('Access PDP direct', () => {
        cy.accessPOC()
        cy.accessPDP()
    })

    it('Test Quantity button - PDP', () => {
        //State Transition Testing /Self-cleaning return for initial value
       cy.get('.border-neutral-200 > :nth-child(3)').click()
        cy.wait(1000)
        cy.get('.mt-10 > .border-neutral-200').contains('2')
       cy.get('.border-neutral-200 > :nth-child(3)').dblclick()
        cy.get('.mt-10 > .border-neutral-200').contains('4')

        cy.get('.border-neutral-200 > :nth-child(1)').click()
        cy.get('.mt-10 > .border-neutral-200').contains('3')
        cy.get('.border-neutral-200 > :nth-child(1)').dblclick()
        cy.get('.mt-10 > .border-neutral-200').contains('1')
        cy.wait(1000)
    })
    it.skip('favorite button', () => {
        cy.get('.mt-10 > .ml-5').click()
        cy.wait(1000)
        cy.get('.mt-10 > .ml-5').should('not.be.disabled')
    })

    it('text', () => {
        cy.get(':nth-child(4) > .mt-2').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > .mt-2').contains('See less')
        cy.get(':nth-child(4) > .mt-2').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > .mt-2').contains('See more')
        // cy.get(':nth-child(4)').should("be.not.visible")
        // cy.get(':nth-child(4)>.font-lato > p').should('not.exist')
       
    })

    it.skip('Open LogikIO', () => {
        cy.get('.pb-24 > .p-3').click()
        cy.wait(2000)
        // cy.get('.fixed > .bg-red-500').click()
    })


})