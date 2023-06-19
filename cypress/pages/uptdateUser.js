class updateUser {

    elemets = {
        profileBnt: () => cy.get(':nth-child(2) > .nav-link'),
        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        selectGender: () => cy.get('#gender'),
        age: () => cy.get('#age'),
        adress: () => cy.get('#address'),
        phoneNymber: () => cy.get('#phone'),
        selectHobyy: () => cy.get('#hobby'),
        currentPassword: () => cy.get('#currentPassword'),
        newPassword: () => cy.get('#newPassword'),
        confirmPassword: () => cy.get('#newPasswordConfirmation'),
        selectLanguage: () => cy.get('#language'),
        saveBtn: () => cy.get('.btn-default')
    }

}
module.exports = new updateUser();