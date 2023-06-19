class updateUser {

    elements = {
        usernameInput: () => cy.get('.input-sm'),
        passwordInput: () => cy.get('[name="password"]'),
        profileBtn: () => cy.get(':nth-child(2) > .nav-link'),
        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        selectGender: () => cy.get('#gender'),
        age: () => cy.get('#age'),
        adress: () => cy.get('#address'),
        phoneNumber: () => cy.get('#phone'),
        selectHobyy: () => cy.get('#hobby'),
        currentPassword: () => cy.get('#currentPassword'),
        newPassword: () => cy.get('#newPassword'),
        confirmPassword: () => cy.get('#newPasswordConfirmation'),
        saveBtn: () => cy.get('.btn-default')
    }

    inputUsername(username) {
        this.elements.usernameInput().type(username)
    }
    passwordInput(pass) {
        this.elements.passwordInput().type(pass)
    }
    clickProfileBtn() {
        this.elements.profileBtn().click()
    }
    inputFirsName(name) {
        this.elements.firstName().type(name)
    }
    inputLastname(lastName) {
        this.elements.lastName().type(lastName)
    }
    selectGender(value) {
        this.elements.selectGender().select(value)
    }
    inputAge(age) {
        this.elements.age().type(age)
    }
    inputAdress(adress) {
        this.elements.adress().type(adress)
    }
    inputPhone(phone) {
        this.elements.phoneNumber().type(phone)
    }
    selectHobyy(value) {
        this.elements.selectHobyy().select(value)
    }
    inputCurrentPassword(cpass) {
        this.elements.currentPassword().type(cpass)
    } 
    inputNewPassword(npass) {
        this.elements.newPassword().type(npass)
    }
    confirmPassword(npass) {
        this.elements.confirmPassword().type(npass)
    }
    clickSaveBtn() {
        this.elements.saveBtn().click()
    }


}
module.exports = new updateUser();