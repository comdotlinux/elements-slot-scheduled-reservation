describe('Elements Gym', () => {
	it('Reserve Slot for tomorrow', () => {
		cy.viewport(1920, 1080)
		cy.visit('https://slots.elements.com/', { timeout: 20_000 })
		cy.get('#input_login_email').type(Cypress.env('ELEMENTS_EMAIL'))
		cy.get('#input_login_password').type(Cypress.env('ELEMENTS_PASSWORD'))
        cy.get('input[type=submit]').click()

		cy.get('#select_studio', { timeout: 20_000 }).select('TIMESLOTS Balanstraße')
        
        cy.get('div.course-table', { timeout: 20_000 })
			.find('a.button')
			.contains('Platz reservieren')
			.click()
			
		cy.wait(100)
		cy.screenshot('slot-reserved', {capture: 'runner'})
		cy.get('div.course-table', { timeout: 20_000 })
			.find('a.button')
			.should('have.text', 'Reservierung löschen')

		cy.wait(1_000)
	})
  })