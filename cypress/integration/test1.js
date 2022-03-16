describe('Test 1', function () {
    it('set resolution', function () {
        cy.visit('https://todomvc.com/examples/vanillajs/')
        cy.viewport(1920, 1080)
    })
    it('accepts input', () => {
        cy.visit('https://todomvc.com/examples/vanillajs/')
        cy.get('.new-todo')
            .type('buy some cheese')
            .type('{enter}')
            .type('feed the cat')
            .type('{enter}')
    })
 
})