describe('LOAD DELAY', () => {
    it('load delay emulate failing', () => {//Mishas
        cy.visit('http://uitestingplayground.com/clientdelay',)
        cy.get('#ajaxButton').should('be.visible').and('exist').click()
        cy.get('#spinner').should('be.visible').and('exist')
        
        //cy.wait(15000)//should set up delay since test is so slow
        cy.contains('.bg-success','Data calculated on the client side.')//text appears after spinner stoped
                        .should('have.css', 'background-color', 'rgb(40, 167, 69)')//color needs to rgb 
        
        
        cy.get('#ajaxButton').should('be.visible').and('exist')
                        .and('have.css', 'background-color', 'rgb(0, 123, 255)').click()
        cy.get('#spinner').should('be.visible').and('exist')
//second click
        cy.get('#content').children().should('have.length', 2)//после второго клика появилось второе окошко Я нашла родителя И обозначила что теперь двое детей
 
        //third click       
        cy.get('#ajaxButton').should('be.visible').and('exist').click()
        cy.get('#spinner').should('be.visible').and('exist')
        cy.get('.bg-success').its('length').should('eq', 3)
    });
})