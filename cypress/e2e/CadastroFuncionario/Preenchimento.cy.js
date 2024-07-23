describe('Sign Up Form', () => {
    beforeEach(() => {
      cy.visit('https://frontend-ergos-hml.cthmprojetos.com/#/authentication/signin'); // Ajuste o caminho conforme necessário
    });
  
    it('should fill out the form and submit successfully', () => {
        cy.get('input[formcontrolname="username"]').type("teste-user");
        
        cy.get('input[formcontrolname="password"]').type("Senha123!");
        
        cy.get('button[type="submit"]').click();
        cy.url({ timeout: 80000 }).should('include', '/#/welcome');
 

        
      //cy.get('mat-mdc-focus-indicator').click();
      //cy.get('#firstName').type('John');
      //cy.get('#lastName').type('Doe');
      //cy.get('#email').type('john.doe@example.com');
      //cy.get('#password').type('secretpassword');
      //cy.get('input[type="checkbox"]').check();
  
      //cy.get('button[type="submit"]').click();
  
      //cy.contains('success').should('be.visible');
    });
  });
  