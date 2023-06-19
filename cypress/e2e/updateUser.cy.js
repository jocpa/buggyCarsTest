import updateUser, { clickProfileBtn } from "../pages/updateUser";

///<reference types="cypress" />

describe('Actualizar perfil', () => {
   const url = 'https://buggy.justtestit.org/'

   beforeEach(() => {
      cy.visit(url)
   });

   it('Debe actualizar perfil correctamente', () => {
        updateUser.inputUsername('ppparker')
        updateUser.passwordInput('Ilove_youMJ1')
        updateUser.clickLoginBtn()
        cy.wait(5000)
        updateUser.clickProfileBtn()
        cy.wait(4000)
        updateUser.inputFirsName('Pedro')
        updateUser.inputLastname('Parker')
        updateUser.selectGender("Male")
        updateUser.inputAge('22')
        updateUser.inputAdress('Los Angeles, California')
        updateUser.inputPhone('22120333')
        updateUser.selectHobyy('Video Games')
        updateUser.clickSaveBtn()
   })
})