
const exp = require("constants")

describe('WebApp', () => {
    beforeEach('visit', () => {
        cy.visit('https://uitestingplayground.com/home')
    })
    it('Verify page', () => {
        cy.title().should('eq', 'UI Test Automation Playground')
    });
    
    it('Verify page2', () => {
            cy.window().title().then( element => {//
            cy.log(element)
            expect(element).to.eq('UI Test Automation Playground')//chai
            cy.wrap(element).should('eq', 'UI Test Automation Playground')//cypress
        })
    });

    it.only('Text in container, using Within with child', ()=> {
        cy.get('.col-sm').first().within(title => {//сработало с потому что в этой группе очень много элементов и он не понимает который взять            
        cy.get('#citation').should('have.text', 'Quality is not an act, it is a habit.Aristotle')
        })
    })
})