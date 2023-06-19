
class registerUser {

    elements = {
        registerBtn: () => cy.get('.btn-success-outline'),
        registerText: () => cy.get('h2'),
        inputLogin: () => cy.get('#username'),
        inputFirsName: () => cy.get('#firstName'),
        inputLastName: () => cy.get('#lastName'),
        inputPassword: () => cy.get('#password'),
        defaultBtn: () => cy.get('.btn-default')
        
    }

}