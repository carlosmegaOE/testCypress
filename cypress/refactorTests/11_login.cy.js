
describe('Login', () => {
    it('Access Page', () => {
        cy.accessPOC()
        cy.accessLogin()
    })

    it('loinValid', () => {
        cy.loginDataValid()
    })

    it('loginInvalid', () => {
        cy.loginDataInvalid()
    })

})