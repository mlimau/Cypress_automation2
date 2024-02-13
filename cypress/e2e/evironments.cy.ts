describe('ENV using', () => {
    it('Stage', () => {
        cy.visit(Cypress.env('stage'))
    })
    it('test', ()=> {
        cy.visit(Cypress.env('prod'))
    })

});