import {AlertPage} from "../../pom/alert";
import {beforeEach} from "mocha";
//Cypress.session.clearAllSavedSessions

describe('ALERT testing', () => {
    beforeEach('Open page', ()=> {
       // cy.session('My current session', () => {
        //cy.visit(`${Cypress.env('herokuapp')}/javascript_alerts`)//with cypress.config env
        cy.visit(`https://the-internet.herokuapp.com/javascript_alerts`)
        //})
    })
    it('Text testing', () => {
       AlertPage.jsAlert()
        })

    it('Click on JS confirm Cancel', () => {
        AlertPage.jsConfirmCansel()
    })

    it.only('JS Prompt click', ()=> {
        AlertPage.jsPropmt()//cy.stub
    })

})
