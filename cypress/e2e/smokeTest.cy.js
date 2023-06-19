describe('Prueba de humo Buggy cars', () => {

  it('Deberia cargar la pagina correctamente', () => {

    cy.visit('https://buggy.justtestit.org/')
    cy.get('.navbar-brand').should('exist')
    cy.get('.display-4').invoke('text').should('contains', 'BuggyCarsRating')
    cy.url().should('eq', 'https://buggy.justtestit.org/')
    
  })

})