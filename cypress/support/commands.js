/// <reference types="cypress" />
Cypress.Commands.add('login', () => {
    // URL para a pagina de teste
    cy.visit('http://localhost:3000/');
    //intercepta a mensagem console.log
    cy.window().then((win) => {
        cy.stub(win.console, 'log').as('consoleLog');
    });

    // Preenche o campo "First Name"
    cy.get('input[name="firstName"]').type('John');

    // Preenche o campo "Last Name"
    cy.get('input[name="lastName"]').type('Doe');

    // Preenche o campo "Email Address"
    cy.get('input[name="email"]').type('john.doe@example.com');

    // Preenche o campo "Password"
    cy.get('input[name="password"]').type('password123');

    // Marca o checkbox "I want to receive inspiration, marketing promotions and updates via email."
    cy.get('input[type="checkbox"]').check();

    // Click no botão "Sign Up"
    cy.get('button[type="submit"]').click();

    //verifica a saida do console para a mensagem "success"
    cy.get('@consoleLog').should('be.calledWith', 'success');
})