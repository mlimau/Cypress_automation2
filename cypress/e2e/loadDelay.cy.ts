describe('LOAD DELAY', () => {
    it('load delay emulate failing', () => {
        cy.visit('http://uitestingplayground.com/home', { timeout: 2000})
    });

    it('load delay emulate', ()=> {
        cy.visit('http://uitestingplayground.com/home', { timeout: 3000})
        cy.get('[href="/loaddelay"]').click()//selectot for link with href
       
        cy.contains('button', 'Button Appearing After Delay')
    })
})
    
   
