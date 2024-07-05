// cypress/integration/login_spec.js

describe('Login Test', () => {
    it('Should log in and verify page title', () => {
      // Visit the login page
      cy.visit('https://www.google.com/maps/@10.3718943,20.4047325,7.67z?entry=ttu')  
      cy.get('#QA0Szd')
        .find('> div')
        .find('> div')
        .find('> div.w6VYqd')
        .find('> div.bJzME.tTVLSc')
        .find('> ul')
        .find('> li:nth-child(1)')
        .find('> button')
        .find('> div')
        .find('> span')
        .click(); // Example: Perform an action like click
      cy.wait(2000)   
      cy.get('#settings')
        .find('> div')
        .find('> div.hdeJwf.dBl9De')
        .find('> ul')
        .find('> div:nth-child(7)')
        .find('> li:nth-child(1)')
        .find('> button')
        .find('> span:nth-child(1)')
        .click(); // Example: Perform an action like click
        cy.wait(2000)
        cy.get('#modal-dialog')
        .find('> div')
        .find('> div.hoUMge')
        .find('> div')
        .find('> div.yFnP6d')
        .find('> div')
        .find('> div')
        .find('> div')
        .find('> div:nth-child(3)')
        .find('> div:nth-child(1)')
        .find('> div:nth-child(11)')
        .find('> a')
        .find('> span')
        .click(); // Example: Perform an action like click



    });
  });
  

  