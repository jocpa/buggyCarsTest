
class registerUser {

    elements = {
        registerBtn: () => cy.get('.btn-success-outline'),
        registerText: () => cy.get('h2'),
        inputLogin: () => cy.get('#username'),
        inputFirsName: () => cy.get('#firstName'),
        inputLastName: () => cy.get('#lastName'),
        inputPassword: () => cy.get('#password'),
        confirmPassword: () => cy.get('#confirmPassword'),
        defaultBtn: () => cy.get('.btn-default'),
        alertText:() => cy.get('.result')
    }

    clickRegisterBtn() {
        this.elements.registerBtn().click()
    }
    inputLogin(username) {
        this.elements.inputLogin().type(username)
    }
    inputFirsName(name) {
        this.elements.inputFirsName().type(name)
    }
    inputLastName(lastName) {
        this.elements.inputLastName().type(lastName)
    }
    inputPassword(pass) {
        this.elements.inputPassword().type(pass)
    }
    confirmPassword(pass) {
        this.elements.confirmPassword().type(pass)
    }
    clickDefaultBtn() {
        this.elements.defaultBtn().click()
    }

}
module.exports = new registerUser();