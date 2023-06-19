import registerUser from "../pages/registerUser"

///<reference types="cypress" />

describe('Registrar usuario', () => {
    const url = 'https://buggy.justtestit.org/register'

    beforeEach(() => {
        cy.visit(url)
    })

    it('Debe registrar un usuario llenando todos los campos exitosamente', () => {
        registerUser.elements.registerText().should('exist')
        registerUser.inputLogin('jparker')
        registerUser.inputFirsName('Peter')
        registerUser.inputLastName('Parker')
        registerUser.inputPassword('Ilove_youMJ1')
        registerUser.confirmPassword('Ilove_youMJ1')
        registerUser.clickDefaultBtn()
        cy.wait(3000)
        registerUser.elements.alertText().should('have.class', 'alert-success')
    })

    it('Registrar usuario con datos ya antes creados',() => {
        registerUser.elements.registerText().should('exist')
        registerUser.inputLogin('pparker')
        registerUser.inputFirsName('Peter')
        registerUser.inputLastName('Parker')
        registerUser.inputPassword('Ilove_youMJ1')
        registerUser.confirmPassword('Ilove_youMJ1')
        registerUser.clickDefaultBtn()
        cy.wait(3000)
        registerUser.elements.alertText().should('have.class', 'alert-danger')
    })

})
