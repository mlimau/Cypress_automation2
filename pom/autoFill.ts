 class AutoFill {
    private inputField = '.auto-complete__value-container'
    private dropDown = '#react-select-2-option-0'//with Yellow (after putting Y)
    private result = '.auto-complete__multi-value__label'//if we choose Yellow, it in the field already

   autoCompete(){
        const obj = {
            Y :'Yellow'
        }
        cy.get(this.inputField).eq(0).type(Object.keys(obj)[0])//enter y
        //cy.pause()
        cy.contains(this.dropDown,Object.values(obj)[0]).click()
        //cy.pause()
        cy.get(this.result).should('have.text', Object.values(obj)[0])


   }
}
export const autoFill = new AutoFill()

 //этот тест без настройки in support-e2e:
 // Cypress.on('uncaught:exception', (err, runnable) => {
 //  return false
 // })показывал uncaught:exception error, когда я прописала настройку всё стало проходить
