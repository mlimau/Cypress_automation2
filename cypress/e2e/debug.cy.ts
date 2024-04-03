
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
    //появляются in run Cypress кнопочки наверху где можно перемещаться вперёд и назад:
    //хорошо использовать где тесты гонятся быстро чтобы уловить момент пока не щёлкнешь Следующий шаг не будет run
    it('Pause', () => {
    cy.pause()//cy.pause(), выполнение теста останавливается, и вы переходите в интерактивный режим в Cypress Test Runner, где можете изучать состояние приложения и выполнить отладку.
        cy.get('#badButton').click()
        cy.pause()
        cy.get('#badButton').should('have.css', 'background-color', 'rgb(40, 167, 69)')//format RGB and add space bitween

    })

})