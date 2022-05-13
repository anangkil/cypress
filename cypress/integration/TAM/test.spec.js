///<reference types="cypress" />

describe('Login', () => {
    before(() => {
  
        cy.visit(Cypress.env('tambaseURL'))

    })
    it('check nav pane_values', () => {
        
        cy.log('Hello')
        
        //cy.location('href')
        // cy.url().then(urlString => {
        // console.log(urlString) 

        // cy.wait(4000)

        // cy.get("div > div.table-cell.text-left.content").eq(0).click()
    })
    })
