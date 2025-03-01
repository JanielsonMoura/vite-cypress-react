describe('SignUp Form', () => {
    it('should fill the form and submit', () => {
      // URL para a pagina de teste
      cy.visit('http://localhost:3000/'); 
      

      //intercepta a mensagem console.log
      cy.window().then((win) => {
        cy.stub(win.console, 'log').as('consoleLog');
      });
      
      cy.viewport(1920, 1080)
      //validação scroll para o tamanho de tela fullHD
      cy.window().then((win) => {
        const hasHorizontalScroll = win.scrollX > 0;
        const hasVerticalScroll = win.scrollY > 0;
  
        // Verificar se a página não tem scroll horizontal
        expect(hasHorizontalScroll).to.be.false;
  
        // Verificar se a página não tem scroll vertical
        expect(hasVerticalScroll).to.be.false;
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
    });
  });