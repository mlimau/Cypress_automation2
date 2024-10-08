
describe('Login page', () => {
    beforeEach(() => {
        cy.visit(
            {
            url: 'click',// /click is endpoint of base url
            method: 'GET'
        }
        )
    })
    it('debug', () => {//used with dropdowns, pop up
        cy.get('#badButton').debug().click()//When debug() is called in the command chain, Cypress pauses execution just before executing the subsequent command (in this case, click()), allowing you to inspect the current state of the application
                                                    // and interact with it manually through the Cypress Test Runner's DevTools console.

    })
   
    it('Pause', () => {
    cy.pause()/
        cy.get('#badButton').click()
        cy.pause()
        cy.get('#badButton').should('have.css', 'background-color', 'rgb(40, 167, 69)')//format RGB and add space bitween

    })

})
