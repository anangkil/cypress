/*
 * @LastEditors: Joseph Ocero
 * @DateCreated: 2022-05-10 13:32:26
 * @LastEditTime: 2022-05-10 18:43:32
 * @Description: basic UI login
 **/

///<reference types="cypress" />

context("Login authentication", () => {
describe('Unsuccessful Login', () => {
    before(() => {
     
            cy.visit(Cypress.env('DSbaseURL'))
            
        })
        it('Verify unsuccessful login no input', () => {

            cy.get('.button').contains('Login').click()
            cy.get('[id^=username-error]').should('have.text', 'This field is required.')
            cy.get('[id^=password-error]').should('have.text', 'This field is required.')
          
            
        })
        it('Verify unsuccessful login invalid email, valid password', () => {
            
            cy.get('#username').clear().type('yhhsdfkkskdff')
            cy.get('#password').clear().type(Cypress.env('DSpassword'))
            cy.get('.button').contains('Login').click()
            cy.get('[id^=username-error]').should('have.text', 'Please enter a valid email address.')
            
        })

        it.only('Verify unsuccessful login valid email, invalid password', () => {
            
            cy.log(Cypress.env('DSusername'))
            cy.get('#username').clear().type(Cypress.env('DSusername'))
            cy.get('#password').clear().type('yhhsdfkkskdff')
            cy.get('.checkbox').contains('I agree to storage of my data according to').click()
            cy.get('.button').contains('Login').click()
            cy.get('.woocommerce-error').contains('ERROR: Incorrect username or password.').should('have.text', 'ERROR: Incorrect username or password.')
  
        })
    })
})
