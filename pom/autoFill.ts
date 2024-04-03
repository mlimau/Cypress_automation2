 class AutoFill {
    private inputField = '.auto-complete__value-container'
    private dropDown = '#react-select-2-option-0'//with Yellow (after putting Y)
    private result = '.auto-complete__multi-value__label'//if we choose Yellow, it in the field already

   autoCompete(){
        const obj = {
            Y :'Yellow'
        }
        cy.get(this.inputField).eq(0).type(Object.keys(obj)[0])//enter y into first fiels (selector shows 2 fields)
        //cy.pause()
        cy.contains(this.dropDown,Object.values(obj)[0]).click()//click on dropdown option where appears 'Yellow' to choose it and put into the field
        //cy.pause()
        cy.get(this.result).should('have.text', Object.values(obj)[0])//'Yellow' showld be in the field


   }
}
export const autoFill = new AutoFill()

 //этот тест без настройки in support-e2e:
 // Cypress.on('uncaught:exception', (err, runnable) => {
 //  return false
 // })показывал uncaught:exception error, когда я прописала настройку всё стало проходить


 //we were making the test using in console (devtools): setTimeout(() => {debugger;}, 5000);
 //so, enter setTimeout into console, during 5 sec put your letter into the field and wait the
 //appearing options with words, then inspect it (debugger allows it),
 // then click on debugger (small window on the top), then choose certain
 // word in dropdown and inspect it with your word already(it gonna be in Elements)