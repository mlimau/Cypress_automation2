describe('LOAD DELAY', () => {
    it('load delay emulate failing', () => {
        cy.visit('http://uitestingplayground.com/home', { timeout: 2000})
    });

    it('load delay emulate', ()=> {
        cy.visit('http://uitestingplayground.com/home', { timeout: 3000})// //здесь настраиваем timeout локально так как глобально Мы указываем в cypress.config.ts
        cy.get('[href="/loaddelay"]').click()//selectot for link with href
        //cy.wait(3000)
        cy.contains('button', 'Button Appearing After Delay')
    })
})
    
   