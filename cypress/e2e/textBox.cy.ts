const textInput = 'Mary Ru'

describe('TEXT BOX tests', ()=> {
    beforeEach('Visit page', () => {
        cy.visit('http://uitestingplayground.com/textinput')
    })
    it('Input field', () => {
       
        cy.get('#newButtonName').type(textInput)//inputing text (const above)
        cy.get('#updatingButton').click()
        cy.get('#updatingButton').should('have.text', textInput)
        cy.contains('button', textInput)

        cy.get('#updatingButton').then(text => {
            const inputText = text.text()
            expect(inputText).to.equal('Mary Ru')
        })    

        cy.get('#updatingButton').invoke('text').should('contain', 'Mary')

        cy.get('.btn-primary').then(btnText => {
            console.log(btnText.text(), 'text')
            cy.log(btnText.text())
            cy.wrap(btnText).should('have.text', textInput)
        })
    })

    it('Childs InputField, BTN', () => {
        cy.get('.form-group').within(text => {//parents to childs - within
            cy.get('#newButtonName').type(textInput)
            cy.get('#updatingButton').click()
            cy.get('#updatingButton').should('have.text', textInput)
            
        })
    })

    it('Placeholder testing, BTN', () => {
        cy.get('.form-group').within(value => {//parents to childs - within
            cy.get('#newButtonName').should('have.attr', 'placeholder', 'MyButton')
            
    })
  })

    it('Text on input page', () => {
        cy.get('.container h3').should('have.text', 'Text Input')
        })
    })

            