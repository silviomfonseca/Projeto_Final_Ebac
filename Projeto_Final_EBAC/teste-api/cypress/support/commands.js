// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('listarCupons', (token) => {
    cy.request({
        method: 'GET',
        url: 'coupons',
        headers: { authorization: `Basic ${token}` }
    })
})

Cypress.Commands.add('cadastrarCupom', (token, code, amount, dicount_type, description) => {
    cy.request({
        method: 'POST',
        url: 'coupons',
        headers: { authorization: `Basic ${token}` },
        body: {
            "code": code,
            "amount": amount,
            "dicount_type": dicount_type,
            "description": description
        }
    })
})
