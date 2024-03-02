import * as cypress from "cypress";

class Alert {
    private alertBtn = '[onclick="jsAlert()"]'
    private jsAlertText = 'I am a JS Alert'
    private resultSelector = '#result'
    private resultTextJsAlert = 'You successfully clicked an alert'
    //Confirm
    private confirmBtn = '[onclick="jsConfirm()"]'
    private cancelTextRes = 'You clicked: Cancel'
    //PROMPT
    private jsPromptBtn = 'Click for JS Prompt'
    private resPromptSelector = '#result'

    jsAlert() {
        cy.get(this.alertBtn).click()
        cy.on('window:alert', (text) => {//cy.on - опция для которая проверяет сообщение alert JScript, которых нет в Selectors Devtools (html)
            expect(text).to.equal(this.jsAlertText)
       })

        cy.on('window:confirm',() =>true)//the "OK" button will be clicked). This means that whenever a confirm dialog is encountered, it will be automatically confirmed
        cy.get(this.resultSelector).should('have.text',this.resultTextJsAlert )
    }

    jsConfirmCansel() {
        cy.get(this.confirmBtn).click()
        cy.on("window:confirm", () => false)//click on Cancel
        cy.get(this.resultSelector).should('have.text', this.cancelTextRes)
    }
    jsPropmt(){
         //cy.stub - код создает заглушку для метода prompt, которая возвращает текст "Hello Mary".
        // Затем, при клике на элемент, содержащий текст, указанный в this.jsPromptBtn,
        // будет симулирован ввод текста в окне prompt с помощью созданной заглушки.
        const inputText = 'Hello Mary'
        cy.window().then(window => {//для получения объекта окна браузера в контексте Cypress.
           cy.stub(window,'prompt').returns(inputText)//returns=type (entering test)//cy.stub говорит заглушке возвращать заданное значение inputText при вызове prompt.
            cy.contains(this.jsPromptBtn).click()
        })
        cy.get(this.resPromptSelector).should('have.text', `You entered: ${inputText}`)


    }
}

export const AlertPage = new Alert()