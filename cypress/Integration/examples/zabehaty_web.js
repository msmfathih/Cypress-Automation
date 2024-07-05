const jsonData = require('../fixtures/example.json')

describe('Login Test', () => {

  before(function(){
    cy.fixture('example').then(function(data)
    {
this.data=data
    })

  })

    it('Should log in and verify page title', () => {
      // Visit the login page
      cy.visit("https://testing.zabehaty.uae.zabe7ti.website/backend"); 
      cy.get('#username').type(this.data.username);
      cy.get('#password').type(this.data.password);
      cy.get('.btn').click(); 
      // Verify page title after login
      cy.title().should('include', 'Zabehaty');  


    });
  });
  

  
