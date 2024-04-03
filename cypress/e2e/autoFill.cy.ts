import { autoFill } from "../../pom/autoFill";
import {beforeEach} from "mocha";

describe('Verify that auto fill is working', () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
       cy.visit(`${Cypress.env('demoQa')}/auto-complete`, {timeout: 7000})

    })
    it('', () => {
        autoFill.autoCompete()
    })
})