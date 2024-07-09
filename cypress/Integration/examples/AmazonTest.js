//cypress term test file knows as SPEC file

//describe is a test suite it have 2 arguments 1.description and 2.function, under function IT block comes under IT 
//Test case should come

describe('My first test suite', function() 

{

  before(function(){
    cy.fixture('AmazonData').then(function(data){    
        this.data=data  
    })

})

    it('My first Test case', function(){

        cy.visit(this.data.amazonurl)
        cy.clearCookies()
        cy.title().should('include', 'Amazon.ae: Shop Online in UAE - Low Prices on Electronics, Fashion, Mobiles, Grocery & more');
        cy.get('#twotabsearchtextbox').type(this.data.productname)
        cy.wait(2000)
        cy.get(':nth-child(1) > .s-suggestion-container > .s-suggestion').click()  
        cy.wait(2000)
        cy.get('body')
        .find('div:nth-child(1)')
        .find('div:nth-child(25)')
        .find('div:nth-child(10)')
        .find('div:nth-child(2)')
        .find('div:nth-child(1)')
        .find('div:nth-child(3)')
        .find('span:nth-child(1)')
        .find('div:nth-child(1)')
        .find('div:nth-child(1)')
        .find('div:nth-child(1)')
        .find('div:nth-child(1)')
        .find('ul:nth-child(2)')
        .find('span:nth-child(1)')
        .find('span:nth-child(1)')
        .find('li:nth-child(1)')
        .find('span:nth-child(1)')
        .find('a:nth-child(1)')
        .find('div:nth-child(1)')
        .find('label:nth-child(1)')
        .find('i:nth-child(2)').click()
        cy.clearLocalStorage()
        // Example: Scroll to element1
        cy.get('#p_72-title > .a-size-base').scrollIntoView();
        cy.wait(2000)
    
        //selecting product and go inside it
        cy.get('[data-asin="B0CX23YFGS"]')
        .find('.sg-col-inner')
        .find('.s-widget-container')
        .find('[data-action="puis-card-container-declarative"]')
        .find('.puis-card-container')
        .find('.a-spacing-base')
        .find('.a-spacing-small')
        .find('[data-cy="title-recipe"]')
        .find('.a-size-mini')
        .find('.a-link-normal')
        .find('.a-size-base-plus').click()
        cy.wait(5000)
        cy.contains('4,599')
        cy.wait(2000)
        cy.clearLocalStorage()
        cy.get('#a-autoid-18-announce > :nth-child(1) > .twisterTextDiv > .a-text-left').click()//click 512GB
        cy.wait(2000)
        cy.contains('In Stock')
        cy.get('.po-brand > .a-span9 > .a-size-base') // Replace with your selector
      .should('contain.text', 'Apple'); // Replace 'Expected Text' with the text you want to verify
        cy.get('.po-model_name > .a-span9 > .a-size-base').should('contain.text', 'MacBook Air'); //validate model name
        cy.clearLocalStorage()
        cy.get('#add-to-cart-button').click()
        // cy.get('.some-element').click();
        // cy.screenshot('optional-file-name')
        cy.clearLocalStorage()
        cy.contains(this.data.cart_sub_total) //cart sub total 5439
        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
        cy.get('#ap_email_login').type(this.data.email)
        cy.get('.a-button-input').click()
        cy.get('#ap_password').type(this.data.password)
        cy.get('#signInSubmit').click()
        cy.wait(2000)
        cy.contains(this.data.Validation_message)


       
    })

    // it('should verify the product price', () => {
    //     // Assert the product price
    //     cy.get('.a-section.aok-relative > .a-price > [aria-hidden="true"] > .a-price-whole').should('have.text', '4289')  // Replace '10' with the expected price value
    //   })

  }
)
