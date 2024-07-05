describe('Example Test', () => {
  it('Uses data from fixture', () => {
    // Load data from the fixture file
    cy.fixture('example.json').then((data) => {
      // Access the data loaded from the fixture
      const username = data.username;
      const password = data.password;

      // Output the data (optional)
      cy.log(`Username: ${username}, Password: ${password}`);

      // Use the data in your test
      cy.visit('https://www.amazon.ae/ref=nav_logo');
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('.btn').click(); 

      // Assert something after login (if needed)
      //cy.url().should('include', '/dashboard');
    });
  });
});
