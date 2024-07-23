describe('Sign Up Form', () => {
    beforeEach(() => {
      cy.visit('https://accounts.google.com/accountchooser/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ddm=0&emr=1&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&hl=pt-PT&ifkv=AdF4I76myY8i3pA0PnJTcNAWipl-ZKEHX78biBhmHR8QQuRd597z4Li2r-MOv_72vevGviypKQZjXg&osid=1&service=mail&flowEntry=AccountChooser'); // Ajuste o caminho conforme necessário
    });
  
    it('should fill out the form and submit successfully', () => {

      cy.get('div.VV3oRb.YZVTmd.SmR8')
  .should('be.visible')
  .click();


       // Seleciona o elemento com base nas classes e atributos específicos
//const elemento = document.querySelector('div.VV3oRb.YZVTmd.SmR8[data-authuser="-1"][data-identifier="mara.vanessa02@gmail.com"]');

// Verifica se o elemento foi encontrado
//if (elemento) {
  // Simula um clique no elemento
  //elemento.click();
//} //else {
 // console.error('Elemento não encontrado.');
//}

//cy.get('input[name="whsOnd zHQkBf"]').type('casadosparasempre2013');


       // cy.get('input[formcontrolname="username"]').type("teste-user");
        
        //  cy.get('input[formcontrolname="password"]').type("Senha123!");
        //describe('Teste do elemento <div class="VfPpkd-RLmnJb"></div>', () => {
           // it('deve verificar a presença do elemento e o conteúdo esperado', () => {
                // Visita a página onde está o elemento
               // cy.visit('/sua-url-aqui'); // Substitua pela URL da sua página
        
                // Verifica se o elemento está presente
                //cy.get('div.VfPpkd-RLmnJb').should('exist');
        
                // Verifica se o elemento contém o texto esperado
               // cy.get('div.VfPpkd-RLmnJb').should('contain.text', 'casadosparasempre2013'); // Substitua pelo texto esperado

        //cy.get('button[type="submit"]').click();

            });
        });
        
        
        //cy.url({ timeout: 80000 }).should('include', '/#/welcome');

    
