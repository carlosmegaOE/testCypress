/// <reference types="Cypress" />
Cypress.Commands.add('accessPOC', () => {
    cy.visit('https://poc-objectedge.frontend.site/')
})

Cypress.Commands.add('accessPDP', () => {
    cy.visit('https://poc-objectedge.frontend.site/')
    cy.get('.absolute > .flex > .font-lato').click()
    cy.wait(2000)
    cy.url().should('eq', 'https://poc-objectedge.frontend.site/bikes')
    cy.get(':nth-child(1) > .p-4 > :nth-child(2) > .font-lato').click()
})

Cypress.Commands.add('accessPLP', () => {
    cy.visit('https://poc-objectedge.frontend.site/')
    cy.get('.absolute > .flex > .font-lato').click()
    cy.wait(2000)
})

Cypress.Commands.add('accessCart', () => {
    cy.visit('https://poc-objectedge.frontend.site/')
    cy.get('.absolute > .flex > .font-lato').click()
    cy.wait(2000)
    cy.url().should('eq', 'https://poc-objectedge.frontend.site/bikes')
    cy.get(':nth-child(1) > .p-4 > :nth-child(2) > .font-lato').click()
    cy.get('.mt-6 > .mt-10 > .flex').click()
    cy.wait(3000)
    cy.get('.absolute > .flex').click()
    cy.wait(2000)
    cy.get('.mt-12 > .font-work-sans').should('exist')
})

Cypress.Commands.add('accessSecureCheckout', () => {
    cy.visit('https://poc-objectedge.frontend.site/')
    cy.clearCookies()
    cy.get('.absolute > .flex > .font-lato').click()
    cy.wait(2000)
    cy.url().should('eq', 'https://poc-objectedge.frontend.site/bikes')
    cy.get(':nth-child(1) > .p-4 > :nth-child(2) > .font-lato').click()
    cy.get('.mt-6 > .mt-10 > .flex').click()
    cy.wait(3000)
    cy.get('.absolute > .flex').click()
    cy.wait(2000)
    cy.get('.mt-12 > .font-work-sans').should('exist')

    cy.get(':nth-child(3) > .border-transparent').click()
    cy.wait(2000)
    cy.get('.mb-10').should('exist')
})

Cypress.Commands.add('accessOverview', () => {
    cy.accessSecureCheckout()

    cy.typedFieldsCustomer();
    cy.typedFieldsShipping();
    cy.wait(2000)

    cy.wait(2000)
    cy.get('.rounded-lg > :nth-child(4) > .font-lato').click()
    cy.wait(2000)
    //Check city field , if will delete aut. after type
})

Cypress.Commands.add('accessPayment', () => {
    cy.accessOverview()
    cy.wait(2000)
    cy.get('.rounded-lg > :nth-child(4) > .font-lato').click()
    cy.wait(5000)

    cy.get('.adyen-checkout__button').should('exist')
    cy.get('.pt-4 > dd.text-base').should('exist')
    
})


//___________________________________________________

Cypress.Commands.add('accessLogin', () => {
    cy.get('.text-gray-700 > .h-6 > path').click()
    cy.wait(2000)
    cy.url().should('eq', 'https://poc-objectedge.frontend.site/login')
    cy.get('.min-h-full > :nth-child(1) > .mt-6').should('exist')
})

Cypress.Commands.add('loginDataValid', () => {
    cy.get('#email').type(Cypress.env('maillValid'))
    cy.get('#password').type(Cypress.env('passValid'))
    cy.get('.space-y-6 > :nth-child(4) > .flex').click()
})

Cypress.Commands.add('loginDataInvalid', () => {
    cy.get('#email').clear()
    cy.get('#email').type(Cypress.env('maillInvalid'))
    cy.get('#password').type(Cypress.env('passInvalid'))
    cy.get('.space-y-6 > :nth-child(4) > .flex').click()
})

Cypress.Commands.add('successfulRegistration', () => {
    cy.get('#email').clear()
    cy.get('#email').type(Cypress.env('mailValid'))
    cy.get('#password').type(Cypress.env('passValid'))
    cy.get('#confirm-password').type(Cypress.env('passValid'))
    cy.get('.space-y-6 > :nth-child(4) > .flex').click()
})


Cypress.Commands.add('typedFieldsCustomer', () => {
    cy.get('#firstName').type(Cypress.env('firstName'))
    cy.get('#lastName').type(Cypress.env('lastName'))
    cy.get('#email').type(Cypress.env('email'));
    cy.get('#phone').type(Cypress.env('phone'));
})

Cypress.Commands.add('typedFieldsShipping', () => {
    cy.get('#shipping-street-name').type(Cypress.env('shipping-street-name'))
    cy.get('#shipping-postalCode').type(Cypress.env('shipping-postalCode'))
    cy.get('#shipping-city').type(Cypress.env('shipping-city'));

})