describe('This is my first test suite', function()
{

    it('My first test case', function(){

        cy.visit("https://royalfoodgallery.com/");
        cy.get('#email').type("admin@gmail.com");
        cy.get('#password').type("123456");
        cy.wait(2000);
        cy.get('.btn-primary').click();
        cy.get('.menu-open > .nav > :nth-child(3) > .nav-link > p').click();
      

    })
}

)