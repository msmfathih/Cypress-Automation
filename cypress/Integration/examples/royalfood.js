describe('This is my first test suite', function()
{
//npx cypress --version
//for data driven test create fixture under before method
    before(function(){
        cy.fixture('example').then(function(data){
            //this keyword is refers to whole class this.data means veriable is iniatialised 
            this.data=data  //this.data(global veriable)  taking data(2) from local veriable data 
        })

    })

    it('My first test case', function(){

        cy.visit(this.data.url);
        cy.get('#email').type(this.data.username);
        cy.get('#password').type(this.data.password);
        cy.wait(2000);
        cy.get('.btn-primary').click();
        cy.get('.menu-open > .nav > :nth-child(3) > .nav-link > p').click();
      

    })
  }

)