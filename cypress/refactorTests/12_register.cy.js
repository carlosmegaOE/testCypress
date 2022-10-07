
describe('Register', () => {
    it('Access Page', () => {
        cy.accessPOC()
        cy.accessLogin()
        cy.wait(2000)
    })

    it('Register', () => {
        cy.get('.mt-2 > .font-medium').click()
        cy.wait(2000)
        cy.get('#email').type('teste')
        cy.get('#password').type('testePASS')
        cy.successfulRegistration()
    })



})