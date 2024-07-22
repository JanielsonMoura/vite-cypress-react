describe('BasicTable Component', () => {
    beforeEach(() => {
      cy.login();
    });
    describe('Renderização da tabela', () => {
      it('deveria renderizar a tabela', () => {
        cy.get('table[aria-label="simple table"]').should('exist');
      });
    });
    describe('Table Header', () => {
      it('Verificando os nomes das headers', () => {
        cy.get('table[aria-label="simple table"] thead tr th').eq(0).should('contain', 'Dessert (100g serving)');
        cy.get('table[aria-label="simple table"] thead tr th').eq(1).should('contain', 'Calories');
        cy.get('table[aria-label="simple table"] thead tr th').eq(2).should('contain', 'Fat (g)');
        cy.get('table[aria-label="simple table"] thead tr th').eq(3).should('contain', 'Carbs (g)');
        cy.get('table[aria-label="simple table"] thead tr th').eq(4).should('contain', 'Protein (g)');
      });
    });
    describe('Conteudo da tabela', () => {
      it('Deveria ter valores nas linhas', () => {
        const rows = [
          { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 'teste + 4.0' },
          { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 'teste + 4.3' },
          { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 'teste + 6.0' },
          { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 'teste + 4.3' },
          { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 'teste + 3.9' },
        ];
  
        rows.forEach((row, index) => {
          cy.get(`table[aria-label="simple table"] tbody tr`).eq(index).within(() => {
            cy.get('td').eq(0).should('contain', row.name);
            cy.get('td').eq(1).should('contain', row.calories);
            cy.get('td').eq(2).should('contain', row.fat);
            cy.get('td').eq(3).should('contain', row.carbs);
            cy.get('td').eq(4).should('contain', row.protein);
          });
        });
      });
    });
  
    describe('Verificando se os valores estão corretos', () => {
      it('Verifica os campos apenas números da tabela', () => {
        cy.get('table[aria-label="simple table"] tbody tr').each(($row) => {
          cy.wrap($row).within(() => {
            // Verifica todas as células, exceto a primeira (index 0)
            for (let i = 1; i <= 4; i++) {
              cy.get('td').eq(i).invoke('text').then((text) => {
                // Remove o "teste +" do texto
                text = text.replace('teste + ', '').trim();
                expect(Number(text)).to.not.be.NaN;
              });
            }
          });
        });
      });
    });
  
  });
  